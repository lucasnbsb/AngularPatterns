import { Pipe, PipeTransform } from '@angular/core';

export type ArrowDirections = 'left' | 'right' | 'up' | 'down';

export const MatchExample: { [key: string]: string } = {
  left: 'circle-chevron-left',
  right: 'circle-chevron-right',
  up: 'circle-chevron-up',
  down: 'circle-chevron-down',
} as const;

export enum MatchExampleEnum {
  left = 'circle-chevron-left',
  right = 'circle-chevron-right',
  up = 'circle-chevron-up',
  down = 'circle-chevron-down',
}

// The only way to have the template perform the lookup is to have string as a type intead of an object.
// which kinda defeats the purpose of the record
export const MatchExampleRecord: Record<ArrowDirections, string> = {
  left: 'circle-chevron-left',
  right: 'circle-chevron-right',
  up: 'circle-chevron-up',
  down: 'circle-chevron-down',
};

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
