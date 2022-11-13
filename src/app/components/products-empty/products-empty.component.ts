import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-empty',
  templateUrl: './products-empty.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsEmptyComponent {
  readonly list$: Observable<ProductsModel[]> = this._productsService.getAll().pipe(
    delay(2000),
    map(() => [])

  )

  constructor(private _productsService: ProductsService) {
  }
}
