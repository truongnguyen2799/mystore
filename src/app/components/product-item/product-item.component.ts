import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;

  constructor() {
    this.product = { id: 1, name: '', price: 0, url: '', description: '' };
    this.quantity = 0;
  }

  ngOnInit(): void {}
}
