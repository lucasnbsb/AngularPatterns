import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './card-layout.component.html',
})
export class CardLayoutComponent {
  title = input.required<string>();
  fullHeight = input<boolean>(false);
  backButtonToHome = input<boolean>(true);
  hideBackButton = input<boolean>(false);

  @Output() backClicked = new EventEmitter<void>();

  constructor() {}
}
