import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quickSearch',
  standalone: true,
})
export class QuickSearchPipe implements PipeTransform {
  transform<T>(value: T[], seachString: string, searchProp: keyof T): T[] {
    if (!seachString || !value) return value;
    const output = value.filter((val) => {
      return (val[searchProp] as any)
        .toString()
        .toLocaleLowerCase()
        .includes(seachString.toString().toLocaleLowerCase());
    });
    return output;
  }
}
