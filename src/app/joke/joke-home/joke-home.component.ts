import { Component } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-joke-home',
  templateUrl: './joke-home.component.html',
  styleUrls: ['./joke-home.component.css']
})
export class JokeHomeComponent {

  joke: string = ''

  constructor(private giveMeJoke: ApiService) {
  }

  getJoke() {
    this.giveMeJoke.getJoke().subscribe((response:any) => {
      this.joke = response[0].joke
    })
}
}
