import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // There is no need to install a whole library for this just because it's in the DaisyUi documentation.
  setTheme(theme: string): void {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
