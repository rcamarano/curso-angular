import { Component, OnInit } from '@angular/core';
import { Products } from'../../interfaces/Products';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent implements OnInit {
  products: Products[] = [];
  productsDetails = '';

  constructor(private productList: ProductListService) { 
    this.getProducts();
  }

  ngOnInit() {
  }
  async getProducts() {
    const products = await this.productList.getProducts();
    console.log(products);
  }
}
