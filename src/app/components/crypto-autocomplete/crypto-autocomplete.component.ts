import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, startWith, take } from "rxjs";
import { filter, map, tap } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';


@Component({
  selector: 'app-crypto-autocomplete',
  templateUrl: './crypto-autocomplete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompleteComponent {
  readonly search: FormControl = new FormControl();

  readonly cryptos$: Observable<CryptoModel[]> = combineLatest([
    this.search.valueChanges.pipe(startWith('')),
    this._cryptoService.getAll(),
  ]).pipe(
    map(([search, cryptos]) => {
      return cryptos.filter((crypto) => crypto.symbol.toLowerCase().includes(search.toLowerCase()))
    })
  )
  private _cryptoSubject: BehaviorSubject<string[]|undefined> = new BehaviorSubject<string[]|undefined>(undefined);
  public crypto$: Observable<string[]|undefined> = this._cryptoSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }
  add(crypto: string): void {
    this.crypto$.pipe(take(1),tap((curr) => {
      if (curr) {
        this._cryptoSubject.next([...curr,crypto])
      }
      else {
        this._cryptoSubject.next([crypto])
      }
    })).subscribe()
  }
}
