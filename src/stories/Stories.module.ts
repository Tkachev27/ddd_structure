import { of } from 'rxjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';

import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MaterialModule } from 'src/app/material.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DateGraphModule } from 'src/app/shared/components/charts/date-graph/date-graph.module';
import { ShowErrorDialogModule } from 'src/app/shared/dialogs/show-error-dialog/show-error-dialog.module';
import { IntervalSelectorModule } from 'src/app/shared/components/interval-selector/interval-selector.module';

import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

const staticTranslateLoader: TranslateLoader = {
  getTranslation() {
    return of(require('src/assets/i18n/ru.json'));
  }
};

const requiredModules = [
  CommonModule,
  MaterialModule,
  PipesModule,
  HttpClientModule,
  ComponentsModule,
  FormsModule,
  ReactiveFormsModule,
  NgxMaterialTimepickerModule,
  DateGraphModule,
  DirectivesModule,
  IntervalSelectorModule,
  ShowErrorDialogModule,
];

@NgModule({
  imports: [
    ...requiredModules,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useValue: staticTranslateLoader,
      }
    })
  ],
  exports: [...requiredModules],
  providers: [
    TranslateStore,
    TranslateService,
  ]
})
export class StoriesModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('ru');
  }
}
