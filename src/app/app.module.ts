import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImportsModule} from "./modules/imports.module";
import {Angulartics2GoogleTagManager} from "angulartics2/gtm";
import {Angulartics2Module} from "angulartics2";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppRouterModule} from "./modules/app-router.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule.withServerTransition({appId: 'my-app'}),
      AppRouterModule,
      BrowserAnimationsModule,
      ImportsModule,
      Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
