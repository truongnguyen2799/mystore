export class Cart {
  productId: number;
  productName: string;
  price: number;
  url: string;
  quantity: number;
  constructor() {
    this.productId = 1;
    this.productName = '';
    this.price = 0;
    this.url = '';
    this.quantity = 0;
  }
}
