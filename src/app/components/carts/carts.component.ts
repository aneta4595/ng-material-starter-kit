import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartsModel } from '../../models/carts.model';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartsComponent {
  readonly data$: Observable<CartsModel> = this._activatedRoute.params.
  pipe(switchMap(data => this._cartsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartsService: CartsService) {
  }
}
