import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  Name = 'Pai Mei';
  Age = 237;
  Job = 'Kung Fu Master';
  Hobbies = ['Kill', ' Fight', ' Fishing'];
  Pet = {
    Name: 'Fumanchu',
    Species: 'Dragon',
    Age: 218
  };

  constructor() { }

  ngOnInit() {
  }

}
