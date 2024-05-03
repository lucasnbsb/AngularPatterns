import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@Component({
  selector: 'app-send-request-if-inactive-for-time',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './send-request-if-inactive-for-time.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendRequestIfInactiveForTimeComponent {}
