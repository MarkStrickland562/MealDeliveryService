import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  arrayOfSelections: any[] = [];
  @Output() clickSender: EventEmitter = new EventEmitter();

  onChange(optionFromList) {
    if(this.arrayOfSelections.includes(optionFromList)){
      this.arrayOfSelections.splice(this.arrayOfSelections.indexOf(optionFromList), 1);
    }
    else{
      this.arrayOfSelections.push(optionFromList);
    }
    this.clickSender.emit(this.arrayOfSelections);
  }
}
