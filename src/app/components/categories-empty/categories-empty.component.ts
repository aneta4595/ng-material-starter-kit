import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-categories-empty',
  templateUrl: './categories-empty.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesEmptyComponent {
  readonly list$: Observable<string[]> = this._categoriesService.getAll().pipe(
    delay(2000),
    map(() => [])
  )

  constructor(private _categoriesService: CategoriesService) {
  }
}
