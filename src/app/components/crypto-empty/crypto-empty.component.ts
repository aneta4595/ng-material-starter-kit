import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-crypto-empty',
  templateUrl: './crypto-empty.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoEmptyComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoCurrencyService.getAll().pipe(
    delay(2000),
    map(() => [])
  )

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }
}
