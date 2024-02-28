import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deirectives',
  templateUrl: './deirectives.component.html',
  styleUrl: './deirectives.component.css'
})
export class DeirectivesComponent {
  size = 10;
  font = 'Arial';
  color = 'black';

  class = ['green-title', 'small-title']

  constructor () {}

  OnInit() {
    }

}
