import { CommonModule } from '@angular/common';

import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from '../card-layout/card-layout.component';
import { NatoAlphabet } from '../shared/constants/nato-alphabet';
import { KeyInObjectPipe } from '../shared/pipes/key-in-object.pipe';
import { PaginateArrayPipe } from '../shared/pipes/paginate-array.pipe';
import { PossessiveFormPipe } from '../shared/pipes/possessive-form.pipe';
import { QuickSearchPipe } from '../shared/pipes/quick-search.pipe';

export type usefullPipes =
  | 'paginateArray'
  | 'keyInObject'
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
    KeyInObjectPipe,
    PossessiveFormPipe,
    QuickSearchPipe,
    FormsModule,
  ],
  templateUrl: './usefull-pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsefullPipesComponent {
  labels: Record<usefullPipes, string> = {
    paginateArray: 'Paginate Array',
    keyInObject: 'Key is in Object',
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

  show(view?: usefullPipes): void {
    this.showView.set(view);
  }
  constructor() {
    console.log(this.arrayForPagination);

    NatoAlphabet.forEach((letter) => {
      this.arrayForSearch.push({ name: letter });
    });
  }
}
