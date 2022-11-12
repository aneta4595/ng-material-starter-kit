import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDeleteComponent {
  readonly list$: Observable<ProductsModel[]> = this._productsService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductsModel[]> = this.refresh$.pipe(
    switchMap(data => this._productsService.getAll()));

  constructor(private _productsService: ProductsService) {
  }

  remove(id: string): void {
    this._productsService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
