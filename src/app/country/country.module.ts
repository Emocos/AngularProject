import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CountryHomeComponent,
    CountryInfoComponent,
    CountrySearchComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
