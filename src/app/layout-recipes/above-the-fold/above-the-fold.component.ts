import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './above-the-fold.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboveTheFoldComponent {}
