import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { JokeHomeComponent } from './joke-home/joke-home.component';


@NgModule({
  declarations: [
    JokeHomeComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule
  ]
})
export class JokeModule { }
