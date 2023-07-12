import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styleUrls: ['./dictionary-home.component.css']
})
export class DictionaryHomeComponent {
  inputWord: string = ''
  wordInfo:any

  constructor(private getWordMeaning: ApiService) {
  }

  getMeaning() {
    this.getWordMeaning.getDictionary(this.inputWord).subscribe((response:any) => {
      this.wordInfo = response[0]
      this.inputWord = ''
    }, (error: HttpErrorResponse) => {
      alert(`Word not found!`)
    })
  }
}
