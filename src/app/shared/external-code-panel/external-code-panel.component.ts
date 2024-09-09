import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ExternalHighlightedCodeComponent } from '../components/external-highlighted-code/external-highlighted-code.component';

export interface ExternalCodeReference {
  title: string;
  url: string;
  language?: string;
}

@Component({
  selector: 'app-external-code-panel',
  standalone: true,
  imports: [ExternalHighlightedCodeComponent, LucideAngularModule],
  templateUrl: './external-code-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExternalCodePanelComponent {
  references = input.required<ExternalCodeReference[]>();

  linkToOpen = signal('');
  language = signal<string | undefined>(undefined);

  openLink(link: string, language: string | undefined) {
    this.linkToOpen.set(link);
    this.language.set(language);
  }
}
