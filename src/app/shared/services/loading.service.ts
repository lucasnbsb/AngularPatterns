/** @fileoverview Enables the control of loading indicators in a minimally invasive manner. */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, finalize, map, of, tap } from 'rxjs';

export type LoaderType = 'global' | 'local';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // You need a counter because many async operations can be started at the same time
  private globalLoadings = 0;
  // You need a record of counters because each local loader can also be started multiple times
  private localLoadingCount: Record<string, number> = {};

  private isGlobalLoading$ = new BehaviorSubject<boolean>(false);
  private isLoading$ = new BehaviorSubject<Record<string, boolean>>({});

  // Forces a local loader into a value.
  setLoading(key: string, value: boolean): void {
    const current = this.isLoading$.value;
    current[key] = value;
    this.isLoading$.next(current);
  }

  // Removes a local loader from the record.
  removeLoading(key: string) {
    const current = this.isLoading$.value;
    if (current[key]) {
      delete current[key];
      this.isLoading$.next(current);
    }
  }

  setGlobalLoading(value: boolean) {
    this.isGlobalLoading$.next(value);
  }

  // These are the main entry points into the service
  getLoading(key: string): Observable<boolean> {
    return this.isLoading$.pipe(map((x: Record<string, boolean>) => x[key]));
  }

  getGlobalLoading(): Observable<boolean> {
    return this.isGlobalLoading$.asObservable();
  }

  // These are the wrappers for your observables
  withGlobalLoading<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => {
        this.incrementGlobalLoading();
      }),
      concatMap(() => obs$),
      finalize(() => {
        this.decrementGlobalLoading();
      }),
    );
  }

  /** The `global` key is reserved, because sometimes we need to trigger a local loader and block elements though the global loader at the same time*/
  withLocalLoading<T>(element: string | string[], obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => {
        if (Array.isArray(element)) {
          element.forEach((key) => {
            this.incrementLocalKey(key);
          });
        } else {
          this.incrementLocalKey(element);
        }
      }),
      concatMap(() => obs$),
      finalize(() => {
        if (Array.isArray(element)) {
          element.forEach((key) => {
            this.decrementLocalKey(key);
          });
        } else {
          this.decrementLocalKey(element);
        }
      }),
    );
  }

  private incrementLocalKey(key: string) {
    if (key === 'global') {
      this.incrementGlobalLoading();
    } else {
      if (!this.localLoadingCount[key]) {
        this.localLoadingCount[key] = 1;
      } else {
        this.localLoadingCount[key]++;
      }
      this.setLoading(key, true);
    }
  }

  private decrementLocalKey(key: string) {
    if (key === 'global') {
      this.decrementGlobalLoading();
    } else {
      if (!this.localLoadingCount[key]) {
        this.localLoadingCount[key] = 0;
      } else {
        this.localLoadingCount[key]--;
      }

      if (this.localLoadingCount[key] <= 0) {
        this.localLoadingCount[key] = 0;
        this.setLoading(key, false);
        this.removeLoading(key);
      }
    }
  }

  private incrementGlobalLoading() {
    this.globalLoadings++;
    this.setGlobalLoading(true);
  }

  private decrementGlobalLoading() {
    this.globalLoadings--;
    // You should be paranoid about counters overruning.
    if (this.globalLoadings <= 0) {
      this.globalLoadings = 0;
      this.setGlobalLoading(false);
    }
  }
}
