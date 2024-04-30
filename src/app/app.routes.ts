import { Routes } from '@angular/router';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';
import { MenuComponent } from './menu/menu.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

export const routes: Routes = [
  { path: 'loading', component: LoadingIndicationComponent, pathMatch: 'full', title: 'Loading Indication' },
  { path: 'themes', component: ThemeSwitcherComponent, pathMatch: 'full', title: 'Theme Switcher' },
  { path: '**', component: MenuComponent, pathMatch: 'full', title: 'Menu' },
];
