import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoversComponent} from "./mars-rovers/rovers/rovers.component";

const routes: Routes = [
  {path: 'rovers', component: RoversComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
