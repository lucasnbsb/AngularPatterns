import { Component } from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  constructor(public theme: ThemeService) {}
}
