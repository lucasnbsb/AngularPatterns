import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LookupTablePipe, MatchExample, MatchExampleEnum } from '../../pipes/lookup-table.pipe';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-lookup-table',
  standalone: true,
  imports: [LucideAngularModule, LookupTablePipe],
  templateUrl: './lookup-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookupTableComponent {
  matchExample = MatchExample;
  matchExampleEnum = MatchExampleEnum
  toMatch = ['left', 'right', 'up', 'down'];
}
