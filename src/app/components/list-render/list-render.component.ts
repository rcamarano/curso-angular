import { Component, OnInit } from '@angular/core';

import { Animals } from '../../interfaces/Animals';
import { Cars } from '../../interfaces/Cars';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  animals: Animals[] = [
    // { name: 'Jade', type: 'Dog', age: 3},
    // { name: 'Mel', type: 'Cat', age: 2},
    // { name: 'Puggy', type: 'Pig', age: 1},
  ];
  cars: Cars[] = [
    // { brand: 'Mitsubishi', model: 'Outlander', year: 2010},
    // { brand: 'Toyota', model: 'Corola', year: 2000},
  ]

  animalDetails = '';
  carDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getCars();
  }

  ngOnInit(): void {}

  showAge(animal: Animals) {
    this.animalDetails = `The age of ${animal.name} is ${animal.age} years old`;
  }
  showYear(car: Cars) {
    this.carDetails = `The fabrication year of ${car.model} is ${car.year}`;
  }
  removeAnimal(animal: Animals) {
    this.animals=  this.animals.filter((a) => animal.name !== a.name);
    this.listService.removeAnimal(animal.id).subscribe();
}
removeCar(car: Cars) {
  this.cars=  this.cars.filter((a) => car.brand !== a.brand);
  this.listService.removeCar(car.id).subscribe();
}
async getAnimals(): Promise<void> {
  this.listService.getAnimals().then((animals) => (this.animals = animals));
} 
// addAnimal(animal: Animals) {
//   this.listService.addItem(animal).subscribe((animal) => this.animals.push());
// }
async getCars(): Promise<void> {
  this.listService.getCars().then((cars) => (this.cars = cars));
}
}
