import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of } from 'rxjs';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-loading-indication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indication.component.html',
})
export class LoadingIndicationComponent {
  constructor(private loading: LoadingService) {}

  // this is how you get a loading indicator from the loading service
  globalLoading$ = this.loading.getGlobalLoading();
  localLoading$ = this.loading.getLoading('local1');
  localLoading2$ = this.loading.getLoading('local2');

  loadingDelay = 1;

  sendRequest() {
    return of('Done!').pipe(delay(this.loadingDelay * 1000));
  }

  sendGlobalLoader() {
    // any observable can be wrapped with the global or local loaders
    this.loading.withGlobalLoading(this.sendRequest()).subscribe((res) => {
      console.log('Global loading complete');
    });
  }

  // local loaders take in keys so that you can have multiple local loaders at the same time
  // the 'global' key will trigger the global loader as well
  sendLocalLoader(key: string | string[]) {
    this.loading.withLocalLoading(key, this.sendRequest()).subscribe((res) => {
      console.log(`Local loading ${key} complete`);
    });
  }
}
