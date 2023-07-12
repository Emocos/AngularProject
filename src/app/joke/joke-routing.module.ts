import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeHomeComponent} from "./joke-home/joke-home.component";

const routes: Routes = [
  {path: 'joke', component: JokeHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
