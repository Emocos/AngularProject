import {Component} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-rovers-home',
  templateUrl: './rovers-home.component.html',
  styleUrls: ['./rovers-home.component.css']
})
export class RoversHomeComponent {
  rovers: any = []
  rover:any = {
    roverName: '',
    roverDate: ''
  }
  photos:any = []

  constructor(private marsRovers: ApiService) {
    this.marsRovers.getAllRovers().subscribe((response: any) => {
      this.rovers = response.rovers;
    })
  }

  getRoverName(name: String) {
    this.rover.roverName = name;
  }

  getRoverDate(date: String) {
    this.rover.roverDate = date
    this.getRoverPhoto()
  }

  getRoverPhoto() {
    this.marsRovers.getInfo({rover: this.rover.roverName, date: this.rover.roverDate}).subscribe((response: any) => {
      response ? this.photos = response.photos : undefined
      this.photos.length > 21 ? this.photos.length = 20 : this.photos
      !this.photos.length ? alert(`No photo in this Date`) : this.photos
    })
  }
}
