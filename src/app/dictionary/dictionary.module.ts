import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryHomeComponent } from './dictionary-home/dictionary-home.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DictionaryHomeComponent
  ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    FormsModule
  ]
})
export class DictionaryModule { }
