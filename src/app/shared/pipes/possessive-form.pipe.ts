import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'possessiveForm',
  standalone: true,
})
export class PossessiveFormPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value || !value.length) {
      return '';
    }
    if (value[value.length - 1] === 's') {
      return `${value}'`;
    } else {
      return `${value}'s`;
    }
  }
}
