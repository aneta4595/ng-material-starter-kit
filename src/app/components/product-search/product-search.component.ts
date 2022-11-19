import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, combineLatest, debounceTime, map, Observable} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {

  readonly search: FormGroup = new FormGroup({title: new FormControl()});
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe
  (map(form => form.title),
    debounceTime(1000))
  /* private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
   public startsWith$: Observable<string> = this._startsWithSubject.asObservable();*/
  readonly list$: Observable<ProductsModel[]> = combineLatest([
    this._productsService.getAll(),
    this.startsWith$,
  ]).pipe(
    map(([products, startsWith]) => {
      if (!startsWith) {
        return [];
      }

      return products.filter(product => product.title.startsWith(startsWith))
    })
  );

  constructor(private _productsService: ProductsService) {
  }
}
/*
  onSearchSubmitted(search: FormGroup): void {
    this._startsWithSubject.next(search.get('title')?.value)
  }
}
*/
