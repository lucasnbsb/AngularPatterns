import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomButtonDirective } from '../custom-button.directive';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ExternalCodePanelComponent } from '../shared/external-code-panel/external-code-panel.component';
import { ExternalCodeReference } from './../shared/external-code-panel/external-code-panel.component';

@Component({
  selector: 'app-directives-for-html-elements',
  standalone: true,
  imports: [
    CardLayoutComponent,
    CustomButtonDirective,
    ExternalCodePanelComponent,
  ],
  templateUrl: './directives-for-html-elements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesForHtmlElementsComponent {
  references: ExternalCodeReference[] = [
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/custom-button.directive.ts',
      title: 'The directive',
      language: 'typescript',
    },
    {
      title: "it's usage",
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/directives-for-html-elements/directives-for-html-elements.component.html',
      language: 'html',
    },
  ];

  alert(text: string): void {
    alert(text);
  }
}
