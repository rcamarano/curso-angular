import { Injectable } from '@angular/core';
import { Observable, of, lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Products } from '../interfaces/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiProductsUrl = 'https://dummyjson.com/products/';
  private apiProductsByCatUrl = 'https://dummyjson.com/products/category/';

  constructor(private http: HttpClient ) {}
  async getProducts(): Promise<Products[]> {
    const response = await fetch(this.apiProductsUrl);
    const data = await response.json();
    const products: Products[] = data.products;
    console.log(products);
    return products;
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  async getById(id: number): Promise<Products> {
    const idUrl = `${this.apiProductsUrl}/${id}`;
    try {
      const productObservable = this.http.get<Products>(idUrl);
      const product = await lastValueFrom(productObservable);
      return product;
    } catch (error) {
      console.error('getById', error);
      throw error;
    }
  }
  // async getByCat(category: string): Promise<Products> {
  //   const categoryUrl = `${this.apiProductsByCatUrl}${category}`;
  //   try {
  //     const productObservable = this.http.get<Products>(categoryUrl);
  //     const product = await lastValueFrom(productObservable);
  //     return product;
  //   } catch (error) {
  //     console.error('getByCat', error);
  //     throw error;
  //   }
  // }
  async getByCat(category: string): Promise<{ products: Products[] }> {
    const categoryUrl = `${this.apiProductsByCatUrl}${category}`;
    try {
      const productObservable = this.http.get<{ products: Products[] }>(categoryUrl);
      const response = await lastValueFrom(productObservable);
      return response;
    } catch (error) {
      console.error('getByCat', error);
      throw error;
    }
  }
  addProduct(product: Products): Observable<Products> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Products>(this.apiProductsUrl, product)
      .pipe(
        catchError(this.handleError('addProduct', product))
      );
}
}
