import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryHomeComponent} from "./dictionary-home/dictionary-home.component";

const routes: Routes = [
  {path: 'dictionary', component: DictionaryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }
