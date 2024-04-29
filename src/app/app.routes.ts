import { Routes } from '@angular/router';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';

export const routes: Routes = [
  { path: 'loading', component: LoadingIndicationComponent, pathMatch: 'full', title: 'Loading Indication' },
];
