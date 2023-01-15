import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, switchMap,map } from 'rxjs';
import { ProductQueryModel } from 'src/app/queries/product-query.model';
import { ProductsModel } from '../../models/products.model';
import { StoreModel } from 'src/app/models/store.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-single-accordion-products',
  templateUrl: './query-single-accordion-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleAccordionProductsComponent {
  readonly products$: Observable<ProductQueryModel[]> = this._productsService.getAllProducts().pipe(
    switchMap((products) => {
      const productIds: string[] = products.reduce((a,c) => [...a,c.id],[] as string[]);
      return this._productsService.getProductsWithStock(productIds).pipe(
        map((productMap) => products.map((product) => this._mapToProductQuery(product, productMap)))
      )
    })
  )

  constructor(private _productsService: ProductsService) {
  }

  private _mapToProductQuery(product: ProductsModel, productMap: Record<string, StoreModel[]>): ProductQueryModel {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: productMap[product.id].reduce((a,c) => {
        return a + c.stock
      }, 0)
    }
  }
}
