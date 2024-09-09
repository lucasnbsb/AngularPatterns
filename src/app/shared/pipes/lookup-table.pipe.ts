import { Pipe, PipeTransform } from '@angular/core';

export const MatchExample = {
  left: 'circle-chevron-left',
  right: 'circle-chevron-right',
  up: 'circle-chevron-up',
  down: 'circle-chevron-down',
} as const;

export enum MatchExampleEnum{
  left = 'circle-chevron-left',
  right = 'circle-chevron-right',
  up = 'circle-chevron-up',
  down = 'circle-chevron-down',
}

@Pipe({
  name: 'enumMatch',
  standalone: true,
})
export class LookupTablePipe implements PipeTransform {
  transform<T>(
    value: unknown,
    toMatch: T,
    defaultValue?: T[keyof T],
  ): T[keyof T] | '' {
    return toMatch[value as keyof T] || (defaultValue ?? '');
  }
}
