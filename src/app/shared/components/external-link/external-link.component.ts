import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-external-link',
    imports: [],
    templateUrl: './external-link.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalLinkComponent {
  href = input.required<string>();
  text = input.required<string>();
}
