import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MarsRoversModule} from "./mars-rovers/mars-rovers.module";
import { WelcomeComponentComponent } from './welcome/welcome-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CountryHomeComponent} from "./country/country-home/country-home.component";
import {CountryModule} from "./country/country.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    NotFoundComponent
  ],
  imports: [
    MarsRoversModule,
    CountryModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
