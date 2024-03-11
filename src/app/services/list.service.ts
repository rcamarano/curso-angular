import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animals } from '../interfaces/Animals';
import { Cars } from '../interfaces/Cars';
// import { switchMap } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';
// import { httpOptions } from './httpOptions';
// import { HandleError, handleHttpError } from './handle-error';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiAnimalsUrl = 'http://localhost:3000/animals';
  private apiCarsUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}
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
  removeAnimal(id: number) {
    return this.http.delete(`${this.apiAnimalsUrl}/${id}`);
  }
  removeCar(id: number) {
    return this.http.delete(`${this.apiCarsUrl}/${id}`);
  }
  getLastAnimal(): Observable<any[]> {
    // Faz uma solicitação HTTP GET para obter todos os animais
    return this.http.get<any[]>(this.apiAnimalsUrl, { observe: 'body' });
  }
  saveAnimalData( data: any ){
    return this.http.post(this.apiAnimalsUrl, data);
  }
  getLastCar(): Observable<any[]> {
    // Faz uma solicitação HTTP GET para obter todos os animais
    return this.http.get<any[]>(this.apiCarsUrl, { observe: 'body' });
  }
saveCarData( data: any ){
  return this.http.post(this.apiCarsUrl, data);
}
}
