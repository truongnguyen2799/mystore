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

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.productService.getListOfProducts().subscribe((products) => {
      this.productList = products as Product[];
    });
  }

  addProductToCart(product: Product, quantity: number): void {
    alert(`${quantity ? quantity : 1} of ${product.name} add to cart`);
    this.cartService.addToCart(product, quantity);
  }
}
