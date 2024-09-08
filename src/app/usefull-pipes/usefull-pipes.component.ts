import { CommonModule } from '@angular/common';
import { ExternalCodeReference } from './../shared/external-code-panel/external-code-panel.component';
import { OffsetByBusinessDaysPipe } from './../shared/pipes/offset-by-business-days.pipe';

import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { NatoAlphabet } from '../shared/constants/nato-alphabet';
import { ExternalCodePanelComponent } from '../shared/external-code-panel/external-code-panel.component';
import { ArrayAsTextPipe } from '../shared/pipes/array-as-text.pipe';
import { PaginateArrayPipe } from '../shared/pipes/paginate-array.pipe';
import { PossessiveFormPipe } from '../shared/pipes/possessive-form.pipe';
import { QuickSearchPipe } from '../shared/pipes/quick-search.pipe';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
import { TimeframeInMinutesPipe } from '../shared/pipes/timeframe-in-minutes.pipe';

export type usefullPipes =
  | 'paginateArray'
  | 'QuickSearch'
  | 'timeframeInMinutes'
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
    ExternalCodePanelComponent,
  ],
  templateUrl: './usefull-pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsefullPipesComponent {
  labels: Record<usefullPipes, string> = {
    paginateArray: 'Paginate Array',
    QuickSearch: 'Quick Search',
    timeframeInMinutes: 'Timeframe in Minutes',
    offsetDateByBusinessDays: 'Offset date by business days',
    timeAgo: 'Time ago',
  };

  seeThePipeButtonLabel = 'the pipe';
  references: Record<usefullPipes, ExternalCodeReference> = {
    paginateArray: {
      title: this.seeThePipeButtonLabel,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/paginate-array.pipe.ts',
    },
    QuickSearch: {
      title: this.seeThePipeButtonLabel,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/quick-search.pipe.ts',
    },
    timeframeInMinutes: {
      title: this.seeThePipeButtonLabel,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/timeframe-in-minutes.pipe.ts',
    },
    offsetDateByBusinessDays: {
      title: this.seeThePipeButtonLabel,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/offset-by-business-days.pipe.ts',
    },
    timeAgo: {
      title: this.seeThePipeButtonLabel,
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/pipes/time-ago.pipe.ts',
    },
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
