import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
