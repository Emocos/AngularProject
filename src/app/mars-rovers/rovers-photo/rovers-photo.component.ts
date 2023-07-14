import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rovers-photo',
  templateUrl: './rovers-photo.component.html',
  styleUrls: ['./rovers-photo.component.css']
})
export class RoversPhotoComponent {
  @Input() photos:any = []
  @Input() photosLength:any
}
