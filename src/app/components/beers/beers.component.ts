import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchAll, switchMap} from 'rxjs';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {
  readonly list$: Observable<BeersModel[]> = this._beersService.getAll();

  private _refreshSubject: BehaviorSubject<{ a: number, b: number }> = new BehaviorSubject<{ a: number, b: number }>({ a: 1, b: 5 });
  public refresh$: Observable<{ a: number, b: number }> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<BeersModel[]> = this.refresh$.pipe(
    switchMap(data => this._beersService.getPage(data.a, data.b))
  );

  constructor(private _beersService: BeersService) {
  }
  onPageChange($event: PageEvent) {
    this._refreshSubject.next({ a: $event.pageIndex + 1, b: $event.pageSize })
  }
}
