import { Pipe, PipeTransform } from '@angular/core';

export type ArrowDirections = 'left' | 'right' | 'up' | 'down';

export const LookupPojo: { [key: string]: string } = {
  left: 'circle-chevron-left',
  right: 'circle-chevron-right',
  up: 'circle-chevron-up',
  down: 'circle-chevron-down',
};

export enum LookupEnum {
  left = 'circle-chevron-left',
  right = 'circle-chevron-right',
  up = 'circle-chevron-up',
  down = 'circle-chevron-down',
}

export const LookupRecord: Record<string, string> = {
  left: 'circle-chevron-left',
  right: 'circle-chevron-right',
  up: 'circle-chevron-up',
  down: 'circle-chevron-down',
};

export const LookupMap = new Map<string, string>([
  ['left', 'circle-chevron-left'],
  ['right', 'circle-chevron-right'],
  ['up', 'circle-chevron-up'],
  ['down', 'circle-chevron-down'],
]);

@Pipe({
  name: 'lookupIn',
  standalone: true,
})
export class LookupTablePipe implements PipeTransform {
  transform<T>(
    value: unknown,
    key: T,
    defaultValue?: T[keyof T],
  ): T[keyof T] | undefined {
    return key[value as keyof T] ?? defaultValue;
  }
}
