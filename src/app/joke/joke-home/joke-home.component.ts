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
  // saveJoke() {
  //   let joke = document.getElementById('joke');
  //   html().from(joke).set({
  //     filename: 'joke.pdf',
  //     html2canvas: { scale: 1 },
  //     jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
  //   }).save();
  // }
}
