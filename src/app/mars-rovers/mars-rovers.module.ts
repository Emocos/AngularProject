import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarsRoversRoutingModule } from './mars-rovers-routing.module';
import { RoversComponent } from './rovers/rovers.component';


@NgModule({
  declarations: [
    RoversComponent
  ],
  imports: [
    CommonModule,
    MarsRoversRoutingModule
  ]
})
export class MarsRoversModule { }
