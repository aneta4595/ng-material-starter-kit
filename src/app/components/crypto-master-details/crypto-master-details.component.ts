import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoCurrencyService.getAll();
  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto);

  }
}
