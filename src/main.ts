import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from '@core/routes/routes';
import { ClickOutsideModule } from '@core/directives/click-outside.directive';
import { EscapeKeyModule } from '@core/directives/escape-key.directive';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      ClickOutsideModule,
      EscapeKeyModule
    ),
    provideRouter(ROUTES),
  ],
}).catch(err => console.log(err));
