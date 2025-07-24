import { Component } from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import {
  ExternalCodePanelComponent,
  ExternalCodeReference,
} from '../shared/external-code-panel/external-code-panel.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
    selector: 'app-theme-switcher',
    imports: [CardLayoutComponent, ExternalCodePanelComponent],
    templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent {
  references: ExternalCodeReference[] = [
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/services/theme.service.ts',
      title: 'the service',
    },
  ];

  constructor(public theme: ThemeService) {}
}
