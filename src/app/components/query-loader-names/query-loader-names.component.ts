import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, switchMap ,map, startWith, catchError, of} from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-query-loader-names',
  templateUrl: './query-loader-names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryLoaderNamesComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<{isLoading: boolean, value?: string[], error?: HttpErrorResponse | Error}>
   = this._refreshSubject.asObservable().pipe(
    switchMap(() => this._loaderService.getNames().pipe(
      map((value) => ({isLoading: false, value: value})),
      startWith({isLoading: true}),
      catchError((error) => of({isLoading: false, error: error}))
    ))
  )
    
  constructor(private _loaderService: LoaderService) {
  }

  refresh(): void {
    this._refreshSubject.next(void 0)
  }

}