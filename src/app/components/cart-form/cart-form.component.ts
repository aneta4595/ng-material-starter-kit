import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartFormComponent {
  readonly ProductsArray = new FormArray<any>([])
  readonly cartForm: FormGroup = new FormGroup({
    date: new FormControl(),
    userId: new FormControl(),
    products: this.ProductsArray,

  });
  readonly products$: Observable<ProductsModel[]> = this._cartService.getAll().pipe(tap(data => this.setControls(data)));
  readonly userId$: Observable<string> = this._activatedRoute.params.pipe(map((params) => params['userId']))

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) { }

  onCartFormSubmitted(cartForm: FormGroup): void {
    this._cartService
      .create({
        userId: cartForm.value.userId,
        date: cartForm.value.date,
        products: this.ProductsArray.value.reduce((acc: { productId: number, quantity: number }[], cur: { productId: number, quantity: number, value: boolean }) => {
          if (cur.value) {
            return [...acc, { productId: cur.productId, quantity: cur.quantity }]
          } else {
            return acc
          }

        }, [])
      })
      .subscribe();
  }
  setControls(products: ProductsModel[]): void {
    this.userId$.subscribe(next => this.cartForm.controls['userId'].setValue(next))
    products.forEach((product) => {
      const newGroup = new FormGroup({
        title: new FormControl(product.title),
        productId: new FormControl(product.id),
        quantity: new FormControl(1),
        value: new FormControl(false)
      });
      this.ProductsArray.push(newGroup)
    })
  }
}
