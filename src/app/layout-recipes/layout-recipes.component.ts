import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { layoutRoutes } from '../app.routes';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-layout-recipes',
  standalone: true,
  imports: [CardLayoutComponent, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './layout-recipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutRecipesComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  subRoutes = layoutRoutes.slice(1);
}
