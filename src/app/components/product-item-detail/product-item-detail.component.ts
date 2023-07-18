import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number;
  product: Product;
  quatityInCard: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.id = 0;
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.quatityInCard = 0;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get(
      'productId'
    ) as unknown as number;
    this.productService.getListOfProducts().subscribe((p) => {
      this.product = p.find(
        (search) => search.id == this.id
      ) as unknown as Product;
    });
  }

  submitForm(): void {
    if (this.quatityInCard == 0) {
      alert('Input quantity greater than 0');
    } else {
      alert(`${this.quatityInCard} of ${this.product.name} add to cart`);
      this.cartService.addToCart(this.product, this.quatityInCard);
    }
  }
}
