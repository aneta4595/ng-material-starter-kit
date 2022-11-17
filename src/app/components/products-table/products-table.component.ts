import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  readonly list$: Observable<ProductsModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
