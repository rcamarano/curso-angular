import { Injectable } from '@angular/core';
import { Animals } from '../interfaces/Animals';
import { Cars } from '../interfaces/Cars';



@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  removeAnimal(animals: Animals[], animal: Animals) {
    return animals.filter((a) => animal.name !== a.name);
  }
  removeCar(cars: Cars[], car: Cars) {
    return cars.filter((c) => car.brand !== c.brand);
  }
}
