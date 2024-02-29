import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css'],
})
export class EmiterComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);}

    NumberPlus() {
      this.myNumber = Math.floor(this.myNumber + 1);}
  
    NumberMinus() {
        this.myNumber = Math.floor(this.myNumber - 1);}
}
