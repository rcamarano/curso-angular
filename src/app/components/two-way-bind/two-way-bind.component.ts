import { Component } from '@angular/core';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrl: './two-way-bind.component.css',
})
export class TwoWayBindComponent implements OnInit {
  name: string = '';
  age: number = 0;

  constructor() {}

  ngOnInit(): void {}
} 
