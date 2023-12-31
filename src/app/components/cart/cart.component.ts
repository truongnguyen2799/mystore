import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  fullName: string;
  address: string;
  cardNumber: string;
  listCart: Cart[];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.fullName = '';
    this.address = '';
    this.cardNumber = '';
    this.listCart = [];
  }

  ngOnInit(): void {
    this.listCart = this.cartService.getListItem();
  }

  btnDeleteClick(productId: number) {
    if (confirm('Do you want to delete this product?')) {
      this.cartService.deleteFromCart(productId);
      alert('Delete suceess!');
    }
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  changeAmount(productId: number, quantity: number) {
    if (isNaN(quantity)) quantity = 1;
    const itemExist = this.listCart.find((item) => item.productId == productId);
    if (itemExist) {
      itemExist.quantity = quantity;
    }
  }

  refreshCart(): void {
    this.listCart = this.cartService.getListItem();
  }

  submit(): void {
    this.router.navigate(['/confirmation']);
  }
}
