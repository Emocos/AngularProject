import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarsRoversRoutingModule } from './mars-rovers-routing.module';
import { RoversComponent } from './rovers/rovers.component';
import { RoversHomeComponent } from './rovers-home/rovers-home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from "@angular/forms";
import { RoversPhotoComponent } from './rovers-photo/rovers-photo.component';


@NgModule({
  declarations: [
    RoversComponent,
    RoversHomeComponent,
    SearchFormComponent,
    RoversPhotoComponent
  ],
  imports: [
    CommonModule,
    MarsRoversRoutingModule,
    FormsModule,
  ],
  exports: [RoversHomeComponent, SearchFormComponent]
})
export class MarsRoversModule { }
