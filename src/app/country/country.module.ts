import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import {FormsModule} from "@angular/forms";
import {ShortNumberPipe} from "../pipes/short-number.pipe";


@NgModule({
  declarations: [
    CountryHomeComponent,
    CountryInfoComponent,
    CountrySearchComponent,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
