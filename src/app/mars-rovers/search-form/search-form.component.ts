import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  selectedRover = 'Rover'
  selectedDate = '2015-06-03'

  @Output() outputRover = new EventEmitter<string>();
  @Output() outputDate = new EventEmitter<string>();

  test() {
    if (this.selectedRover !== 'Rover') {
      this.outputRover.emit(this.selectedRover)
      this.outputDate.emit(this.selectedDate)
    } else alert(`Please choose the Rover!`)
  }
}
