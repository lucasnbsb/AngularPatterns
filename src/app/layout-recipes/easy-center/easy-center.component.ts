import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardLayoutComponent } from '../../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-easy-center',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './easy-center.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasyCenterComponent {
  title = inject(ActivatedRoute).snapshot.title;
}
