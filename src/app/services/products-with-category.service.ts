import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, concatMap,map } from 'rxjs';
import { NewProductsModel } from '../models/new-products.model';
import { OtherProductsQuery } from '../queries/other-products.query';

@Injectable({ providedIn: 'root' })
export class ProductsWithCategoryService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<NewProductsModel[]> {
    return this._httpClient.get<NewProductsModel[]>('https://fakestoreapi.com/products');
  }

  getProductsWithCategory(products: NewProductsModel[]): Observable<OtherProductsQuery> {
    return from(products).pipe(
        concatMap((product) => this._httpClient.get<NewProductsModel[]>('https://fakestoreapi.com/products/category/' + product.category).pipe(
            map((products) => ({
                id: product.id,
                title: product.title,
                price: product.price,
                others: products.map((other) => ({title: other.title}))
            }))
        ))
    )
  }
}
