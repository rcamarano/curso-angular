import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-minus',
  templateUrl: './number-minus.component.html',
  styleUrl: './number-minus.component.css'
})
export class NumberMinusComponent {
  @Output() numberMinus: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.numberMinus.emit();
  }

}
