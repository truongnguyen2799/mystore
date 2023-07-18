import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getListOfProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json');
  }

  getProductById(idSearch: number): Product {
    var result = { id: 0, name: '', price: 0, url: '', description: '' };

    this.http.get<Product[]>('../assets/data.json').subscribe((products) => {
      this.products = products as Product[];
    });

    return result;
  }
}
