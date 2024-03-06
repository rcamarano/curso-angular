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
    // console.log('Removing animal', animal);
    this.animals=  this.animals.filter((a) => animal.name !== a.name);
    this.listService.removeAnimal(animal.id).subscribe();
}
removeCar(car: Cars) {
  // console.log('Removing animal', animal);
  this.cars= this.listService.removeCar(this.cars, car);
}
getAnimals(): void {
  this.listService.getAnimals().subscribe((animals) => (this.animals = animals));
} 
getCars(): void {
  this.listService.getCars().subscribe((cars) => (this.cars = cars));
}
}
