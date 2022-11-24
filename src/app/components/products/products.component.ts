import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  public orders: Observable<string[]> = of(['asc', 'desc'])
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();


  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();

  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$,
    this.order$,
  ]).pipe(
    map(([products, category, order]: [ProductsModel[], string, string]) => {
      return products.filter((product: ProductsModel) => product.category === category).sort((a, b) => {
        if (a.price > b.price) return order === 'asc' ? 1 : -1
        if (a.price < b.price) return order === 'asc' ? -1 : 1
        return 0;
      })
    })
  )
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductsModel[]> = this.refresh$.pipe(switchMap(data => this._productsService.getAll()));

  constructor(private _productsService: ProductsService, private _categoriesService: CategoriesService) {
  }



  selectCategory(category: string): void {
    this._categorySubject.next(category)
  }


  sort(order: string): void {
    this._orderSubject.next(order)

  }

  remove(id: string): void {
    this._productsService.delete(id).subscribe(() => this._refreshSubject.next())
  }
}
