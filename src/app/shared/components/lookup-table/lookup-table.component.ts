import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  LookupTablePipe,
  MatchExample,
  MatchExampleEnum,
} from '../../pipes/lookup-table.pipe';
import { MatchExampleRecord } from './../../pipes/lookup-table.pipe';

@Component({
  selector: 'app-lookup-table',
  standalone: true,
  imports: [LucideAngularModule, LookupTablePipe],
  templateUrl: './lookup-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookupTableComponent {
  matchExample = MatchExample;
  matchExampleEnum = MatchExampleEnum;
  matchExampleRecord = MatchExampleRecord;
  toMatch = ['left', 'right', 'up', 'down'];
}
