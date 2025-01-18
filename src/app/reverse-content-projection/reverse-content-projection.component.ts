import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-reverse-content-projection',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './reverse-content-projection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReverseContentProjectionComponent {}
