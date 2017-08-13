import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoadersCssModule } from 'angular2-loaders-css';

import 'hammerjs';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    LoadersCssModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
