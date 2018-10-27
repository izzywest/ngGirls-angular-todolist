import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue($event.target.value)">

  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = 'Hello World';

constructor() { 
  this.title = 'I Love Angular';
}

ngOnInit() { 
  this.title = 'Angular CLI Rules!';
}

changeTitle(newTitle: string) {
  this.submit.emit(newTitle);
}

submitValue(newTitle: string) {
  this.submit.emit(newTitle);
}

}



