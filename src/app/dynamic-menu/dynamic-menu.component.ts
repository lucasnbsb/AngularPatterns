import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { EXAMPLE_MENU_ITEMS } from '../shared/constants/menu-items';
import { OverlayMenuComponent } from '../shared/overlay-menu/overlay-menu.component';
import {
  ExternalCodePanelComponent,
  ExternalCodeReference,
} from './../shared/external-code-panel/external-code-panel.component';

@Component({
  selector: 'app-dynamic-menu',
  standalone: true,
  imports: [
    CardLayoutComponent,
    OverlayMenuComponent,
    MatMenuModule,
    ExternalCodePanelComponent,
  ],
  templateUrl: './dynamic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicMenuComponent {
  @ViewChild(OverlayMenuComponent, { static: true })
  overlayMenu!: OverlayMenuComponent;
  menuItems = EXAMPLE_MENU_ITEMS;

  references: ExternalCodeReference[] = [
    {
      title: 'Component',
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/overlay-menu/overlay-menu.component.ts',
      language: 'typescript',
    },
    {
      title: `Component's template`,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/overlay-menu/overlay-menu.component.html',
      language: 'html',
    },
    {
      title: 'Custom pipe',
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/with-loading-pipe.pipe.ts',
      language: 'typescript',
    },
  ];

  triggerMenu(mouseEvent: MouseEvent) {
    this.overlayMenu.openFromPosition(mouseEvent);
  }

  openMenuInRandomPosition() {
    this.overlayMenu.openFromPosition({
      clientX: Math.random() * window.innerWidth,
      clientY: Math.random() * window.innerHeight,
    });
  }
}
