import { Component } from '@angular/core';

@Component({
  selector: 'app-country-home',
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.css']
})
export class CountryHomeComponent {
  countryInfo: any = []

  getCountry(data: any) {
    this.countryInfo = data
  }
}
