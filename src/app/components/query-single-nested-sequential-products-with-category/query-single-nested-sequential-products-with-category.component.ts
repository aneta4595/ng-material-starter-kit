import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { OtherProductsQuery } from '../../queries/other-products.query';
import { ProductsWithCategoryService } from '../../services/products-with-category.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-single-nested-sequential-products-with-category',
  templateUrl: './query-single-nested-sequential-products-with-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedSequentialProductsWithCategoryComponent {
  private _productsWithCategorySubject: BehaviorSubject<OtherProductsQuery[]> = new BehaviorSubject<OtherProductsQuery[]>([]);

  public productsWithCategory$: Observable<OtherProductsQuery[]> = this._productsWithCategorySubject.asObservable();

  readonly products$: Observable<OtherProductsQuery> = this._productsWithCategoryService.getAllProducts().pipe(
    switchMap((products) => this._productsWithCategoryService.getProductsWithCategory(products)),
    tap((data) => this.addNextProductsWithCategory(data))
  );

  constructor(private _productsWithCategoryService: ProductsWithCategoryService) {
  }

  addNextProductsWithCategory(products: OtherProductsQuery): void {
    this.productsWithCategory$.pipe(
      take(1),
      tap((prevProducts) => this._productsWithCategorySubject.next([...prevProducts, products]))
    ).subscribe()
  }
}
