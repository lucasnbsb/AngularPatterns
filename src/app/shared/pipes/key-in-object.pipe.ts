import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyInObject',
  standalone: true,
})
export class KeyInObjectPipe implements PipeTransform {
  transform(key: string, object: any): boolean {
    return object && key && Object.keys(object).includes(key);
  }
}
