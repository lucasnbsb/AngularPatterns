import { Pipe, PipeTransform } from '@angular/core';
import { Observable, catchError, isObservable, map, of, startWith } from 'rxjs';

@Pipe({
  name: 'menuItemLoading',
  standalone: true,
})
export class CustomWithLoadingPipe implements PipeTransform {
  transform(
    val: any,
  ): Observable<{ loading: boolean; value?: any; error?: any }> {
    if (!val) {
      return of({ loading: false, value: true });
    }
    return isObservable(val)
      ? val.pipe(
          map((value: any) => ({ loading: false, value: value })),
          startWith({ loading: true }),
          catchError((error) => of({ loading: false, error: error })),
        )
      : val;
  }
}
