import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rcp-child-component',
    imports: [FormsModule],
    templateUrl: './rcp-child-component.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RcpChildComponentComponent {
  // It's important that the template being reverse-projected is required ( or static in the old decorator based content queries)
  actionButtons = viewChild.required<TemplateRef<unknown>>('actionButtons');
  disableButtons = false;
}
