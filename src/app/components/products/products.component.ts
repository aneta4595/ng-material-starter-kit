import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  data$: Observable<ProductsModel[] | null> = this._productsService.getAll();
  constructor( private _productsService: ProductsService) {
  }
}
