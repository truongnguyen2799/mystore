import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCart: Cart[];
  constructor(private productService: ProductService) {
    this.listCart = [];
  }

  getListItem(): Cart[] {
    return this.listCart;
  }

  addToCart(product: Product, quantity: number) {
    if (product === undefined) return;
    if (isNaN(quantity)) quantity = 1;
    const itemExist = this.listCart.find(
      (item) => item.productId == product.id
    );
    if (itemExist) {
      itemExist.quantity = quantity;
    } else {
      this.listCart.push({
        productId: product.id,
        productName: product.name,
        price: product.price,
        url: product.url,
        quantity: quantity,
      });
    }
  }

  deleteFromCart(productId: number) {
    if (isNaN(productId)) return;
    for (let index = 0; index < this.listCart.length; index++) {
      if (this.listCart[index].productId == productId) {
        this.listCart.splice(index, 1);
        break;
      }
    }
  }

  getTotalPrice(): number {
    var total = 0;
    this.listCart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return Math.round(total * 100) / 100 ;;
  }
}
