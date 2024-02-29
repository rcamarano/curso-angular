import { NumberPlusComponent } from './../number-plus/number-plus.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  @Output() numberPlus: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.numberPlus.emit();
  }
  myNumber: number = 0;

  // constructor() {}

  // ngOnInit(): void {}

  NumberPlus() {
    this.myNumber = Math.floor(this.myNumber + 1);}

  NumberMinus() {
      this.myNumber = Math.floor(this.myNumber - 1);}
}
