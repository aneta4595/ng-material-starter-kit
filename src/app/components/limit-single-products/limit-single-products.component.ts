import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {  FormControl, } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import {  switchMap, } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-limit-single-products',
  templateUrl: './limit-single-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitSingleProductsComponent {
  readonly limit: FormControl = new FormControl(5);

  readonly limitOptions$: Observable<number[]> = of([5,10,15]);

  readonly products$: Observable<ProductsModel[]> = this._activatedRoute.queryParams.pipe(
    switchMap(data => this._productsService.getAllProductsByLimit(data['limit'])));

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
  }


  
}


