import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Renderer2,
  ViewChild,
  inject,
  input,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { LucideAngularModule } from 'lucide-angular';
import { MenuItem } from '../constants/menu-items';
import { CustomWithLoadingPipe } from '../pipes/with-loading-pipe.pipe';
@Component({
  selector: 'app-overlay-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    LucideAngularModule,
    AsyncPipe,
    CustomWithLoadingPipe,
  ],
  templateUrl: './overlay-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayMenuComponent {
  @ViewChild('outerMenu', { static: true }) outerMenu!: MatMenu;
  @ViewChild(MatMenuTrigger, { static: true })
  outerMenuTrigger!: MatMenuTrigger;
  @ViewChild('triggerButton', { static: true })
  outerMenuTriggerElement!: ElementRef;

  menuItems = input<MenuItem[]>();
  isRoot = input<boolean>(true);

  isProgramaticalyOpened$$ = signal(false);

  callback = new EventEmitter<MenuItem>();

  renderer = inject(Renderer2);

  @HostListener('document:scroll', ['$event'])
  closeMenuIfProgramaticalyOpened(event: Event) {
    if (this.isProgramaticalyOpened$$()) {
      this.outerMenuTrigger.closeMenu();
    }
  }

  triggerMenu() {
    if (this.isRoot() && this.outerMenu) {
      this.isProgramaticalyOpened$$.set(true);
      this.outerMenuTrigger.openMenu();
    }
  }

  openFromPosition(
    mouseEvent: MouseEvent | { clientX: number; clientY: number },
  ) {
    this.renderer.setStyle(
      this.outerMenuTriggerElement.nativeElement,
      'left',
      `${mouseEvent.clientX}px`,
    );
    this.renderer.setStyle(
      this.outerMenuTriggerElement.nativeElement,
      'top',
      `${mouseEvent.clientY}px`,
    );

    this.isProgramaticalyOpened$$.set(true);
    this.triggerMenu();
  }

  markMenuClosed() {
    this.isProgramaticalyOpened$$.set(false);
  }
}
