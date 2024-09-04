/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // Apply the directive only to button elements
  selector: 'button[customButton]',
  standalone: true,
})
export class CustomButtonDirective {
  @HostBinding('class')
  get elementClass(): string {
    return `btn btn-outline glass ${this.variantClass}`;
  }

  // This is an underated way to limit the usage of your styles to the specs of a design system
  @Input() variant: 'primary' | 'secondary' | 'error' = 'primary';

  get variantClass(): string {
    return `btn-${this.variant}`;
  }

  constructor() {}
}
