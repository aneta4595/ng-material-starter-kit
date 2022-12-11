import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { CartModel } from '../models/cart.model';

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products');
  }

  create(cart: Omit<CartModel, 'id'>): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/carts', cart);
  }
}
