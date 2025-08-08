import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { loadingInterceptorInterceptor } from './core/interceptors/loading-interceptor.interceptor';

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    //
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(
      routes,
      withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptors([
        loadingInterceptorInterceptor
      ])
    ),
    provideAnimations(),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    }
  ]
};
