import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.productService.getListOfProducts().subscribe((products) => {
      this.productList = products as Product[];
      console.log("🚀 ~ file: product-list.component.ts:21 ~ ProductListComponent ~ this.productService.getListOfProducts ~ products:", products)
    });
  }

  addProductToCart(product: Product, quantity: number): void {
    alert(`${quantity ? quantity : 1} of ${product.name} add to cart`);
  }
}
