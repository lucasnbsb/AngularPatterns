import { CommonModule } from '@angular/common';
import { OffsetByBusinessDaysPipe } from './../shared/pipes/offset-by-business-days.pipe';

import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ExternalLinkComponent } from '../shared/components/external-link/external-link.component';
import { NatoAlphabet } from '../shared/constants/nato-alphabet';
import { ArrayAsTextPipe } from '../shared/pipes/array-as-text.pipe';
import { PaginateArrayPipe } from '../shared/pipes/paginate-array.pipe';
import { PossessiveFormPipe } from '../shared/pipes/possessive-form.pipe';
import { QuickSearchPipe } from '../shared/pipes/quick-search.pipe';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
import { TimeframeInMinutesPipe } from '../shared/pipes/timeframe-in-minutes.pipe';

export type usefullPipes =
  | 'paginateArray'
  | 'PossessiveForm'
  | 'QuickSearch'
  | 'timeframeInMinutes'
  | 'arrayAsText'
  | 'offsetDateByBusinessDays'
  | 'timeAgo';

@Component({
  selector: 'app-usefull-pipes',
  standalone: true,
  imports: [
    CardLayoutComponent,
    PaginateArrayPipe,
    CommonModule,
    PossessiveFormPipe,
    QuickSearchPipe,
    FormsModule,
    TimeframeInMinutesPipe,
    OffsetByBusinessDaysPipe,
    ArrayAsTextPipe,
    TimeAgoPipe,
    ExternalLinkComponent,
  ],
  templateUrl: './usefull-pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsefullPipesComponent {
  labels: Record<usefullPipes, string> = {
    paginateArray: 'Paginate Array',
    PossessiveForm: 'Possessive Form',
    QuickSearch: 'Quick Search',
    timeframeInMinutes: 'Timeframe in Minutes',
    arrayAsText: 'Array as Text',
    offsetDateByBusinessDays: 'Offset date by business days',
    timeAgo: 'Time ago',
  };

  keys = Object.keys(this.labels) as usefullPipes[];

  showView: WritableSignal<usefullPipes | undefined> = signal(undefined);

  arrayForPagination = Array.from({ length: 100 }, (_, i) => i + 1);
  arrayForSearch: { name: string }[] = [];
  searchTerm: WritableSignal<string> = signal('');
  pageIndex: WritableSignal<number> = signal(1);
  pageSize = 5;
  businessDays: WritableSignal<number> = signal(5);
  today = new Date();
  lastWeek = new Date();
  lastMonth = new Date();

  show(view?: usefullPipes): void {
    this.showView.set(view);
  }
  constructor() {
    NatoAlphabet.forEach((letter) => {
      this.arrayForSearch.push({ name: letter });
    });
    this.lastWeek.setDate(this.today.getDate() - 7);
    this.lastMonth.setDate(this.today.getDate() - 30);
  }
}
