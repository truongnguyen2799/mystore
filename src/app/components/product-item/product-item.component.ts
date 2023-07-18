import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addProductToCart = new EventEmitter();
  quantity: number;
  listQuantity: number[];

  constructor() {
    this.product = { id: 1, name: '', price: 0, url: '', description: '' };
    this.quantity = 1;
    this.listQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void {}
}
