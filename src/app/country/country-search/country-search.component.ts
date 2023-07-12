import {Component, EventEmitter, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent {
  countryName: string = ''
  countryInfo: any

  @Output() outputCountryInfo: any = new EventEmitter<any>();

  constructor(private getCountry: ApiService) {
  }

  getCountryInfo() {
    try {
      if (this.countryName.length) {
        this.getCountry.getCountry(this.countryName).subscribe((response) => {
          this.countryInfo = response;
        })
        this.outputCountryInfo.emit(this.countryInfo)
      }
    } catch (e:any) {
      console.log(e.message)
    }
  }
}
