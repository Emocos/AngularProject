import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface data {
  rover:string,
  date:string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getAllRovers() {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=vKP5FItkV4Qg3ZjArUMJYzwZeCxS88e2qzsN0JYr`)
  }

  public getInfo(data: data) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${data.rover}/photos?earth_date=${data.date}&api_key=vKP5FItkV4Qg3ZjArUMJYzwZeCxS88e2qzsN0JYr`)
  }

  public getCountry (country: String) {
      return this.http.get(`https://restcountries.com/v3.1/name/${country}`)
  }
}
