import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomButtonDirective } from '../custom-button.directive';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-directives-for-html-elements',
  standalone: true,
  imports: [CardLayoutComponent, CustomButtonDirective],
  templateUrl: './directives-for-html-elements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesForHtmlElementsComponent {
  alert(text: string): void {
    alert(text);
  }
}
