import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product-by-category',
  templateUrl: './edit-product-by-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductByCategoryComponent {
  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl()

  });
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories();

  readonly details$: Observable<ProductsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getOne(data['id'])),
    tap((details) => this.form.patchValue({ title: details.title, description: details.description, category: details.category, price: details.price }))
  );

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._productsService.update({
        title: form.value.title,
        category: form.value.category,
        description: form.value.description,
        price: form.value.price,
        id: data['id']
      }))
    ).subscribe();
  }
}
