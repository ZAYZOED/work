import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import { DemoMaterialModule } from './demo-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AccueilCourtierComponent } from './accueil-courtier/accueil-courtier.component';
import { MessagesComponent } from './messages/messages.component';
import { httpInterceptorProviders } from './http-interceptors';
import {createCustomElement} from '@angular/elements';
import { ConfigurationService } from './configuration.service';
import {DataTablesModule} from 'angular-datatables';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {LanguagePipe} from "./pipes/language.pipe";
import {LanguageInjectable} from "./LanguageInjectable";
import {UtilsService} from "./utils/utils.service";
import {UtilsComponent} from "./utils/utils.component";
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './i18n/');
  //https://admin-covea-rec.meprotege.fr/documents/2525514/0/fr.json/c5ff8e94-c65a-f1af-f5b9-486019f895e7?t=1619020208417
}

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    MessagesComponent,
    AccueilCourtierComponent,
    LanguagePipe,
    UtilsComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NativeDateModule,
    DataTablesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ConfigurationService,
    LanguagePipe,
    LanguageInjectable,
    UtilsService,
    httpInterceptorProviders
  ],
  entryComponents: [
    AccueilCourtierComponent
  ],
   //Uncomment bootstrap to run the TestComponent as an independent app
   //bootstrap: [TestComponent]
})

export class AppModule {
  // Comment out the constructor and ngDoBootstrap method when you want to bootstrap the TestComponent.

  constructor(private injector: Injector,translate: TranslateService) {
      customElements.define('accueil-courtier', createCustomElement(AccueilCourtierComponent, { injector }));
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }
  ngDoBootstrap() {}
}
