import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ColumnDef,
  FlexRenderDirective,
  createAngularTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/angular-table';
import { Person, makeData } from '../shared/utils/makeData';

@Component({
  selector: 'app-tanstack-table',
  standalone: true,
  imports: [FlexRenderDirective],
  templateUrl: './tanstack-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TanstackTableComponent {
  readonly data = signal(makeData(10_000));

  readonly columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      cell: (info) => info.getValue(),
      header: 'First name',
    },
    {
      accessorKey: 'lastName',
      cell: (info) => info.getValue(),
      header: 'Last name',
    },
    {
      accessorKey: 'age',
      cell: (info) => info.getValue(),
      header: 'Age',
    },
    {
      accessorKey: 'visits',
      cell: (info) => info.getValue(),
      header: 'Visits',
    },
    {
      accessorKey: 'progress',
      cell: (info) => info.getValue(),
      header: 'Progress',
    },
    {
      accessorKey: 'status',
      cell: (info) => info.getValue(),
      header: 'Status',
    },
  ];

  public table = createAngularTable(() => ({
    data: this.data(),
    columns: this.columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  }));

  onPageSizeChange(event: any): void {
    this.table.setPageSize(Number(event.target.value));
  }
}
