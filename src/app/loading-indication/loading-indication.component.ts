import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, of } from 'rxjs';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { ExternalHighlightedCodeComponent } from '../shared/components/external-highlighted-code/external-highlighted-code.component';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-loading-indication',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardLayoutComponent,
    ExternalHighlightedCodeComponent,
  ],
  templateUrl: './loading-indication.component.html',
})
export class LoadingIndicationComponent {
  constructor(private loading: LoadingService) {}

  // this is how you get a loading indicator from the loading service
  globalLoading$ = this.loading.getGlobalLoading();
  localLoading$ = this.loading.getLoading('local1');
  localLoading2$ = this.loading.getLoading('local2');

  loadingDelay = 1;

  linkToOpen = signal('');

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
