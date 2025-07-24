import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  model,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { HighlightModule } from 'ngx-highlightjs';
import { ExternalLinkComponent } from '../../shared/components/external-link/external-link.component';
import {
  EXAMPLE_BUTTONS,
  SOCIAL_BUTTONS,
} from '../../shared/constants/lorem-ipsum-stuff';
import { CardLayoutComponent } from './../../shared/components/card-layout/card-layout.component';

@Component({
    selector: 'app-container-queries',
    imports: [
        CardLayoutComponent,
        LucideAngularModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutModule,
        HighlightModule,
        ExternalLinkComponent,
        CommonModule,
    ],
    templateUrl: './container-queries.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerQueriesComponent implements OnInit {
  maxWidth = signal(320);
  minWidth = signal(170);
  componentWidth = model(300);
  numberOfCards = model(3);

  outerCardSize = 672;
  padding = 64;
  exampleButtons = EXAMPLE_BUTTONS;
  socialButtons = SOCIAL_BUTTONS;

  ngOnInit(): void {
    this.updateRelativeSizes(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.updateRelativeSizes(width);
  }

  updateRelativeSizes(width: number) {
    if (width > 672) {
      this.maxWidth.set(this.outerCardSize - this.padding);
      this.componentWidth.set(this.outerCardSize - this.padding);
    } else {
      this.maxWidth.set(width - this.padding);
      this.componentWidth.set(width - this.padding);
    }
  }

  openCode() {
    window.open(
      'https://github.com/lucasnbsb/AngularPatterns/blob/main/src/app/layout-recipes/container-queries/container-queries.component.html',
      '_blank',
    );
  }
}
