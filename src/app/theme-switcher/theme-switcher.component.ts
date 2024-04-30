import { Component } from '@angular/core';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {}
