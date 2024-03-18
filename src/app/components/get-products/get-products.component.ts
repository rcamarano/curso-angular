import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/Products';
import { ProductListService } from '../../services/product-list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css',
})

export class ProductListComponent implements OnInit {
  products: Products[] = [];

  constructor(private productList: ProductListService) { 
    this.getProducts();
  }
  getProductById=new FormGroup({
    id: new FormControl(),
  });

  ngOnInit(): void {
  }

  // getProducts(): void {
  //   this.productList.getProducts().then(response => {
  //     this.products = response;
  //   });
  // }
  async getProducts(): Promise<void> {
    try {
      const response = await this.productList.getProducts();
      this.products = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  async getById(id: number): Promise<void> {
    try {
      const response = await this.productList.getById(id);
      console.log(response);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
    }
  }
}