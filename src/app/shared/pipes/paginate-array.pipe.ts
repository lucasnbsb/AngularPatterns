import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginateArray',
  standalone: true,
})
export class PaginateArrayPipe implements PipeTransform {
  transform<T>(value: T[], pageIndex: number, pageSize: number): any[] {
    const startIndex = (pageIndex - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const result = value.slice(startIndex, endIndex);
    return result;
  }
}
