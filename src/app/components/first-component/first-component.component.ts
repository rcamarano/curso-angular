import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  Name = 'Rogério';
  Age = 47;
  Job = 'Developer';
  Hobbies = ['Music', 'Movies', 'Sports'];
  Car = {
    Brand: 'Misubishi',
    Model: 'Outlander',
    Year: 2010
  };

  constructor() { }

  ngOnInit() {
  }

}
