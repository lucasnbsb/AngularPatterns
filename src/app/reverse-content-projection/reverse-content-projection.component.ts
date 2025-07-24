import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import {
  ExternalCodePanelComponent,
  ExternalCodeReference,
} from '../shared/external-code-panel/external-code-panel.component';
import { RcpChildComponentComponent } from '../shared/rcp-child-component/rcp-child-component.component';
import { RcpParentLayoutComponentComponent } from '../shared/rcp-parent-layout-component/rcp-parent-layout-component.component';

@Component({
    selector: 'app-reverse-content-projection',
    imports: [
        CommonModule,
        CardLayoutComponent,
        RcpParentLayoutComponentComponent,
        RcpChildComponentComponent,
        ExternalCodePanelComponent,
    ],
    templateUrl: './reverse-content-projection.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReverseContentProjectionComponent {
  references: ExternalCodeReference[] = [
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/refs/heads/main/src/app/shared/rcp-child-component/rcp-child-component.component.ts',
      title: 'The child component',
      language: 'typescript',
    },
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/refs/heads/main/src/app/shared/rcp-child-component/rcp-child-component.component.html',
      title: `It's template`,
      language: 'html',
    },
    {
      title: "the parent component's template",
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/refs/heads/main/src/app/shared/rcp-parent-layout-component/rcp-parent-layout-component.component.html',
      language: 'html',
    },
    {
      title: "this component's template",
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/refs/heads/main/src/app/reverse-content-projection/reverse-content-projection.component.html',
      language: 'html',
    },
  ];
}
