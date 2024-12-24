import { Routes } from '@angular/router';
import { DirectivesForHtmlElementsComponent } from './directives-for-html-elements/directives-for-html-elements.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { AboveTheFoldComponent } from './layout-recipes/above-the-fold/above-the-fold.component';
import { ContainerQueriesComponent } from './layout-recipes/container-queries/container-queries.component';
import { EasyCenterComponent } from './layout-recipes/easy-center/easy-center.component';
import { LayoutRecipesComponent } from './layout-recipes/layout-recipes.component';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';
import { MenuComponent } from './menu/menu.component';
import { SendRequestIfInactiveForTimeComponent } from './send-request-if-inactive-for-time/send-request-if-inactive-for-time.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { UsefullPipesComponent } from './usefull-pipes/usefull-pipes.component';

export const layoutRoutes = [
  {
    path: '',
    title: 'Layout Recipes',
    component: LayoutRecipesComponent,
  },
  {
    path: 'easyCenter',
    title: 'Easy Center',
    component: EasyCenterComponent,
  },
  {
    path: 'aboveTheFold',
    title: 'Above the fold',
    component: AboveTheFoldComponent,
  },
];

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
  {
    path: 'useMoreDirectives',
    component: DirectivesForHtmlElementsComponent,
    pathMatch: 'full',
    title: 'Use more directives',
  },

  {
    path: 'containerQueries',
    title: 'Container Queries',
    component: ContainerQueriesComponent,
  },
  {
    path: 'dynamicMenu',
    title: 'Dynamic Menu',
    component: DynamicMenuComponent,
  },
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full',
    title: 'Angular Recipes',
  },
];
``;
