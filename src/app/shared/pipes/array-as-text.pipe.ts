import { Pipe, PipeTransform } from '@angular/core';

export function arrayAsReadableText(value: string[]): string {
  return value.join(', ').replace(/, ([^,]*)$/, ' and $1');
}

@Pipe({
  name: 'arrayAsText',
  standalone: true,
})
export class ArrayAsTextPipe implements PipeTransform {
  transform(value: string[]): unknown {
    return arrayAsReadableText(value);
  }
}
