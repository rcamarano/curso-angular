import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-plus',
  templateUrl: './number-plus.component.html',
  styleUrl: './number-plus.component.css'
})
export class NumberPlusComponent implements OnInit{
  @Output() numberPlus: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.numberPlus.emit();
  }
}
