import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HttpClient, HttpBackend } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS as MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/legacy-tooltip';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function createTranslateLoader(httpBackend: HttpBackend): TranslateHttpLoader {
  const http = new HttpClient(httpBackend);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpBackend]
      }
    }),
    AppRoutingModule,
    CookieModule.forRoot(),
    AbilityModule,
    // use forRoot() in main app module only.
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { disableTooltipInteractivity: true }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
