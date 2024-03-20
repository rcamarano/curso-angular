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
  getProductByCategory=new FormGroup({
    category: new FormControl(''),
  });

  ngOnInit(): void {
    this.getProducts(); // Carrega todos os produtos ao inicializar o componente
  }
  async getProducts(): Promise<void> {
    try {
      const response = await this.productList.getProducts();
      this.products = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  async getById(): Promise<void> {
    const id = this.getProductById.value.id; // Obtém o ID do input
    if (id !== null && id !== undefined && id !== '') {
      try {
        const response = await this.productList.getById(id);
        this.products = [response]; // Atualiza a lista para mostrar apenas o produto correspondente ao ID
      } catch (error) {
        console.error('Error fetching product by ID:', error);
      }
    } else {
      this.getProducts(); // Se nenhum ID for passado, carrega todos os produtos novamente
    }
    this.getProductById.reset();
  }

  // async getByCat(): Promise<void> {
  //   const category = this.getProductByCategory.value.category;
  //   if (category !== null && category !== undefined && category !== '') {
  //     try {
  //       const response = await this.productList.getByCat(category);
  //       // this.products = [response];
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching product by Category:', error);
  //     }
  //   } else {
  //     this.getProducts();
  //   }
  //   this.getProductByCategory.reset();
  // }
  async getByCat(): Promise<void> {
    const category = this.getProductByCategory.value.category;
    if (category !== null && category !== undefined && category !== '') {
      try {
        const response = await this.productList.getByCat(category);
        // Verifica se a resposta contém um array de produtos
        if (Array.isArray(response.products)) {
          this.products = response.products; // Atualiza a lista de produtos
        } else {
          console.error('Response does not contain an array of products:', response);
        }
      } catch (error) {
        console.error('Error fetching product by Category:', error);
      }
    } else {
      this.getProducts(); // Carrega todos os produtos novamente se nenhuma categoria for especificada
    }
    this.getProductByCategory.reset();
  }

}