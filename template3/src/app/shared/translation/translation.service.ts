import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { translation as EN } from './languages/en/strings';
import { translation as AR } from './languages/ar/strings';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language: string | undefined
  constructor(private router: Router) { }
  getTranslation() {
    this.language = this.router.url.startsWith('/ar') ? 'ar' : 'en'
    if (this.language === 'ar') { return AR }
    else { return EN }
  }
  getDirection(): string { return (this.language === 'ar') ? 'rtl' : 'ltr' }
  getLanguage(): string | undefined { return this.language }
  switchLanguage(): string { return (this.router.url.startsWith('/ar/')) ? this.router.url.replace('/ar/', '/') : (this.router.url.startsWith('/ar')) ? this.router.url.replace('/ar', '/') : '/ar' + this.router.url }
  getURL(path: string): string { return (this.language === 'ar') ? ((path.startsWith('#')) ? '/ar' + path : '/ar/' + path) : path }
}
