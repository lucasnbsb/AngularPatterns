import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExternalCodePanelComponent } from './../shared/external-code-panel/external-code-panel.component';

import {
  BehaviorSubject,
  interval,
  map,
  Observable,
  of,
  repeat,
  Subject,
  take,
  takeUntil,
  timeout,
} from 'rxjs';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ExternalCodeReference } from '../shared/external-code-panel/external-code-panel.component';

@Component({
    selector: 'app-send-request-if-inactive-for-time',
    imports: [CommonModule, CardLayoutComponent, ExternalCodePanelComponent],
    templateUrl: './send-request-if-inactive-for-time.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendRequestIfInactiveForTimeComponent {
  sourceSubject$ = new Subject<void>();
  actionOnInactivity$ = new Subject<void>();
  counterSubject$: Observable<number>;
  interval = 5000;
  counter = new BehaviorSubject(0);

  references: ExternalCodeReference[] = [
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/send-request-if-inactive-for-time/send-request-if-inactive-for-time.component.ts',
      title: 'this component',
      language: 'typescript',
    },
  ];

  constructor() {
    this.sourceSubject$
      .pipe(
        timeout({ each: this.interval, with: () => this.actionOnInactivity() }),
        repeat(),
        takeUntilDestroyed(),
      )
      .subscribe();

    this.counterSubject$ = interval(1000).pipe(
      map((i) => i + 1), // increment the counter
      takeUntil(this.sourceSubject$),
      takeUntilDestroyed(),
      take(5),
      repeat(),
    );
  }

  actionOnInactivity() {
    this.counter.next(this.counter.value + 1);
    console.log('This is the action that runs if the subject is inactive');
    return of(null);
  }
}
