import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllApiService {

  constructor(private http: HttpClient) {}

  public getAllRovers() {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=vKP5FItkV4Qg3ZjArUMJYzwZeCxS88e2qzsN0JYr`)
  }
}
