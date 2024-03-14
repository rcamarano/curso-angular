import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Products } from '../interfaces/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiProductsUrl = 'https://dummyjson.com/products/';

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
  // async addProduct(newProduct: Products): Promise<any> {
  //   return this.http.post<any>(this.apiProductsUrl, newProduct)
  //     .pipe(
  //       catchError(error => {
  //         throw new Error('Erro ao adicionar novo produto: ' + error.message);
  //       })
  //     );
  // }
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
