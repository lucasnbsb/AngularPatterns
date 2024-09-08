import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './card-layout.component.html',
})
export class CardLayoutComponent {
  title = input.required<string>();
  backButtonToHome = input<boolean>(true);
  hideBackButton = input<boolean>(false);

  @Output() backClicked = new EventEmitter<void>();

  constructor() {}
}
