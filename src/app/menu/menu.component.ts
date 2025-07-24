import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ExternalHighlightedCodeComponent } from './../shared/components/external-highlighted-code/external-highlighted-code.component';

@Component({
    selector: 'app-menu',
    imports: [
        CommonModule,
        RouterModule,
        CardLayoutComponent,
        NgOptimizedImage,
        ExternalHighlightedCodeComponent,
    ],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
  today = new Date();
  routes = routes.slice(0, -1);
}
