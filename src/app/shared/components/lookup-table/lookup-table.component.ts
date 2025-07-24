import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  ArrowDirections,
  LookupEnum,
  LookupMap,
  LookupPojo,
  LookupTablePipe,
} from '../../pipes/lookup-table.pipe';
import { LookupRecord } from './../../pipes/lookup-table.pipe';

@Component({
    selector: 'app-lookup-table',
    imports: [LucideAngularModule, LookupTablePipe],
    templateUrl: './lookup-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookupTableComponent {
  lookupPojo = LookupPojo;
  lookupEnum = LookupEnum;
  lookupRecord = LookupRecord;
  lookupMap = LookupMap;
  lookupTableTyped = ['left', 'right', 'up', 'down'] as ArrowDirections[];
  lookupTableString = ['left', 'right', 'up', 'down'];
}
