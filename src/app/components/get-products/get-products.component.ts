import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/Products';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css',
})
// export class GetProductsComponent implements OnInit {
//   products: Products[] = [];
//   productsDetails = '';

//   constructor(private productList: ProductListService) {
//     this.getProducts();
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then(console.log);
//   }

//   ngOnInit() {}
//   async getProducts() {
//     this.products = await this.productList.getProducts();
//     console.log(this.products);
//   }
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productList: ProductListService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productList.getProducts().then(response => {
      this.products = response;
    });
  }
}
