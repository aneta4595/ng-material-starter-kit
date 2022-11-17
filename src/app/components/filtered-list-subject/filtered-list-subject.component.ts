import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-filtered-list-subject',
  templateUrl: './filtered-list-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListSubjectComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();

  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$
  ]).pipe(
    map(([products, category]: [ProductsModel[], string]) => {
      return products.filter(product => product.category === category)
    })
  );

  constructor(private _productsService: ProductsService, private _categoriesService: CategoriesService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
