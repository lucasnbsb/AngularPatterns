import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-external-highlighted-code',
  standalone: true,
  imports: [Highlight, CommonModule, LucideAngularModule],
  templateUrl: './external-highlighted-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExternalHighlightedCodeComponent {
  link = input.required<string>();
  lang = input<string>();
  filename = computed(() => this.link().split('/').pop());
  text = signal('');
  closeClicked = output<void>();

  constructor(private http: HttpClient) {
    effect(() => {
      this.http.get(this.link(), { responseType: 'text' }).subscribe((data) => {
        this.text.set(data);
      });
    });
  }
}
