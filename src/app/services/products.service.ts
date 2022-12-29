import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<ProductsModel> {
    return this._httpClient.get<ProductsModel>('https://fakestoreapi.com/products/' + id);
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  update(product: ProductsModel): Observable<void> {
    return this._httpClient.put<void>('https://fakestoreapi.com/products/' + product.id, product);
  }
}
