import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.css']
})
export class RoversComponent {
 @Input() rovers: any = []
}
