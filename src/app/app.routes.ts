import { Routes } from '@angular/router';
import { FormGroupValidationsComponent } from './form-group-validations/form-group-validations.component';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';
import { MenuComponent } from './menu/menu.component';
import { SendRequestIfInactiveForTimeComponent } from './send-request-if-inactive-for-time/send-request-if-inactive-for-time.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { UsefullPipesComponent } from './usefull-pipes/usefull-pipes.component';

export const routes: Routes = [
  {
    path: 'loading',
    component: LoadingIndicationComponent,
    pathMatch: 'full',
    title: 'Loading Indicators',
  },
  {
    path: 'ifInactive',
    component: SendRequestIfInactiveForTimeComponent,
    pathMatch: 'full',
    title: 'Request if Inactive',
  },
  {
    path: 'formGroups',
    component: FormGroupValidationsComponent,
    pathMatch: 'full',
    title: 'Form Group Validations',
  },
  {
    path: 'pipes',
    component: UsefullPipesComponent,
    pathMatch: 'full',
    title: 'Usefull Pipes',
  },
  {
    path: 'themes',
    component: ThemeSwitcherComponent,
    pathMatch: 'full',
    title: 'Theme Switcher',
  },
  { path: '**', component: MenuComponent, pathMatch: 'full', title: 'Menu' },
];
