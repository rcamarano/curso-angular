import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animals } from '../interfaces/Animals';
import { Cars } from '../interfaces/Cars';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiAnimalsUrl = 'http://localhost:3000/animals';
  private apiCarsUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}
  removeAnimal(id: number) {
    return this.http.delete(`${this.apiAnimalsUrl}/${id}`);
  }
  removeCar(cars: Cars[], car: Cars) {
    return cars.filter((c) => car.brand !== c.brand);
  }
  getAnimals(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.apiAnimalsUrl);
  }
  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiCarsUrl);
  }
  getItem(id: number): Observable<Animals> {
    return this.http.get<Animals>(`${this.apiAnimalsUrl}/${id}`);
  }
  getCarItem(id: number): Observable<Cars> {
    return this.http.get<Cars>(`${this.apiCarsUrl}/${id}`);
  }
  addItem(item: Animals) {
    return this.http.post(this.apiAnimalsUrl, item);
  }
}
