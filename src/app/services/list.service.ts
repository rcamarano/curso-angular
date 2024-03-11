import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animals } from '../interfaces/Animals';
import { Cars } from '../interfaces/Cars';
import { switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
// import { httpOptions } from './httpOptions';
// import { HandleError, handleHttpError } from './handle-error';



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
  saveAnimalData( data: any ){
        // Consulta o último ID
        // return this.http.get<any[]>(this.apiAnimalsUrl + '?_sort=id&_order=desc&_limit=1').pipe(
        //   // Incrementa o ID e adiciona o novo animal
        //   switchMap((animal) => {
        //     const lastId = animal.length > 0 ? animal[0].id : 0;
        //     const newId = lastId + 1;
        //     const newData = { ...data, id: newId };
        //     return this.http.post(this.apiAnimalsUrl, newData);
        //   }));
    
    // console.log(data);
    return this.http.post(this.apiAnimalsUrl, data);
  }
  // addItem(item: Animals) {
  //   return this.http.post(this.apiAnimalsUrl, item);
  // }
//   addAnimal(animal: Animals): Observable<Animals> {
//     return this.http.post<Animals>(this.apiAnimalsUrl, animal, httpOptions)
//       .pipe(
//         catchError(this.handleError('addAnimal', animal))
//       );
// }
}
