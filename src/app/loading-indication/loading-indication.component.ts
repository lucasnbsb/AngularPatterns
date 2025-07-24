import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, of } from 'rxjs';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { LoadingService } from '../shared/services/loading.service';
import {
  ExternalCodePanelComponent,
  ExternalCodeReference,
} from './../shared/external-code-panel/external-code-panel.component';

@Component({
    selector: 'app-loading-indication',
    imports: [
        CommonModule,
        RouterModule,
        CardLayoutComponent,
        ExternalCodePanelComponent,
    ],
    templateUrl: './loading-indication.component.html'
})
export class LoadingIndicationComponent {
  constructor(private loading: LoadingService) {}

  // this is how you get a loading indicator from the loading service
  globalLoading$ = this.loading.getGlobalLoading();
  localLoading$ = this.loading.getLoading('local1');
  localLoading2$ = this.loading.getLoading('local2');

  loadingDelay = 1;

  linkToOpen = signal('');

  references: ExternalCodeReference[] = [
    {
      title: 'the service',
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/services/loading.service.ts',
      language: 'typescript',
    },
    {
      title: 'the component',
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/loading-indication/loading-indication.component.ts',
      language: 'typescript',
    },
  ];

  sendRequest() {
    return of('Done!').pipe(delay(this.loadingDelay * 1000));
  }

  sendGlobalLoader() {
    // any observable can be wrapped with the global or local loaders
    this.loading.withGlobalLoading(this.sendRequest()).subscribe(() => {
      console.log('Global loading complete');
    });
  }

  // local loaders take in keys so that you can have multiple local loaders at the same time
  // the 'global' key will trigger the global loader as well
  sendLocalLoader(key: string | string[]) {
    this.loading.withLocalLoading(key, this.sendRequest()).subscribe(() => {
      console.log(`Local loading ${key} complete`);
    });
  }

  openLink(link: string) {
    this.linkToOpen.set(link);
  }
}
