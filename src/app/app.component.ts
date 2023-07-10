import {Component, OnInit} from '@angular/core';
import {AllApiService} from "./all-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rovers: any = [];
  constructor(private marsRovers: AllApiService) {}

  getRovers() {
    this.marsRovers.getAllRovers().subscribe((response: any) => {
      this.rovers = response;
      console.log(this.rovers)
    })
  }

  ngOnInit() {
    this.getRovers()
  }
}
