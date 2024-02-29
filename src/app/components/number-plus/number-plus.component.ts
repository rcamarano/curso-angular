import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-plus',
  templateUrl: './number-plus.component.html',
  styleUrl: './number-plus.component.css'
})
export class NumberPlusComponent implements OnInit{

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit();
  }

  numberPlus() {
    this.myNumber = Math.floor(this.myNumber + 1);}
}
