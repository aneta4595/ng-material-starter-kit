import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProductsByLimit(limit: number): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>(`https://fakestoreapi.com/products?limit=${limit}`);
  }
}
