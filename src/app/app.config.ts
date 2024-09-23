import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  ArrowBigLeft,
  Blocks,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CloudLightning,
  CloudRain,
  CloudSun,
  CloudSunRain,
  EllipsisVertical,
  Github,
  Linkedin,
  LucideAngularModule,
  Moon,
  Package,
  Search,
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
        Blocks,
        Search,
        CloudRain,
        CloudSun,
        CloudLightning,
        CloudSunRain,
      }),
    ),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        html: () => import('highlight.js/lib/languages/xml'),
      },
    }),
    provideHttpClient(),
  ],
};
