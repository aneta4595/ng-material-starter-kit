import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, map, Observable} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-list-routing',
  templateUrl: './filtered-list-routing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListRoutingComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productsService.getAll(),
  this._activatedRoute.params]).pipe(
    map(([products, params] : [ProductsModel[], Params]) => {
      return products.filter((product: ProductsModel) =>
      product.category === params ['category'])
      }
    )
  )

  constructor(private _categoriesService: CategoriesService, private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}
