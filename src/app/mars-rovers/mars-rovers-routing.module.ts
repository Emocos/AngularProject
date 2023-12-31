import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoversHomeComponent} from "./rovers-home/rovers-home.component";

const routes: Routes = [
  {path: 'rovers', component: RoversHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarsRoversRoutingModule { }
