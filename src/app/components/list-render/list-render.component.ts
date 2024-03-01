import { Component, OnInit } from '@angular/core';

import { Animals } from '../../interfaces/Animals';
import { Cars } from '../../interfaces/Cars';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  animals: Animals[] = [
    { name: 'Jade', type: 'Dog', age: 3},
    { name: 'Mel', type: 'Cat', age: 2},
    { name: 'Puggy', type: 'Pig', age: 1},
  ];
  cars: Cars[] = [
    { brand: 'Mitsubishi', model: 'Outlander', year: 2010},
    { brand: 'Toyota', model: 'Corola', year: 2000},
  ]

  animalDetails = '';
  carDetails = '';

  constructor() { }

  ngOnInit(): void {}

  showAge(animal: Animals) {
    this.animalDetails = `The age of ${animal.name} is ${animal.age} years old`;
  }
  showYear(car: Cars) {
    this.carDetails = `The year of ${car.year} is ${car.year}`;
  }
}
