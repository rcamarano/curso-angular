import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
    });
  }

  async addProduct(): Promise<void> {
    const product = this.productForm.value;
    // ... add product to the database
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
      })
    })
    .then(res => res.json())
    .then(console.log);
  }
}
