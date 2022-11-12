import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-master-list',
  templateUrl: './products-master-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsMasterListComponent {
  readonly list$: Observable<ProductsModel[]> = this._productsService.getAll();

  private _selectedProductIdSubject: Subject<string> = new Subject<string>();
  public SelectedProductId$: Observable<string> = this._selectedProductIdSubject.asObservable();
  readonly details$: Observable<ProductsModel> = this.SelectedProductId$.pipe(
    switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  selectProduct(id: string): void {
    this._selectedProductIdSubject.next(id)
  }
}
