import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-layout.component.html',
})
export class CardLayoutComponent {
  title = input.required<string>();
}
