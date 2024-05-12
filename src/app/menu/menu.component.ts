import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CardLayoutComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  routes = routes.slice(0, -1);
}
