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

  public getCountry (country: string) {
      return this.http.get(`https://restcountries.com/v3.1/name/${country}`)
  }

  public getJoke () {
    return this.http.get(`https://api.api-ninjas.com/v1/jokes`,{
      headers: {
        'X-Api-Key': 'IkkXoKh7nK7L8d2Cu5ehrA==yxuZ30fFZoNbaGlH',
      },
      params: {
        limit: '1',
      }
    })
  }

  public getDictionary (word: string) {
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  }
}
