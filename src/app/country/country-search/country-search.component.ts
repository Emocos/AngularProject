import {Component, EventEmitter, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {catchError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent {
  countryName: string = ''
  countryInfo: any = []

  @Output() outputCountryInfo: any = new EventEmitter<any>();

  constructor(private getCountry: ApiService) {
  }

  getCountryInfo() {
    if (this.countryName.length) {
      this.getCountry.getCountry(this.countryName).subscribe((response: any) => {
          this.countryInfo = response[0];
          this.outputCountryInfo.emit(this.countryInfo)
          this.countryName = ''
        }, (error: HttpErrorResponse) => {
          alert(`Country not found!`)
        }
      )
    }
  }
}
