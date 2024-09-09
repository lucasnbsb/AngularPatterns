import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  ArrowBigLeft,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  EllipsisVertical,
  Github,
  Linkedin,
  LucideAngularModule,
  Moon,
  Package,
  Sun,
  X,
} from 'lucide-angular';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Sun,
        Moon,
        Linkedin,
        EllipsisVertical,
        Github,
        Package,
        ArrowBigLeft,
        X,
        CircleChevronDown,
        CircleChevronLeft,
        CircleChevronRight,
        CircleChevronUp,
      }),
    ),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
      },
    }),
    provideHttpClient(),
  ],
};
