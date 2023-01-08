import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-pagination-simple-beers',
  templateUrl: './pagination-simple-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationSimpleBeersComponent {
  readonly currentPage$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((params) => (params['page'] ? +params['page'] : 1))
  )
  readonly beers$: Observable<BeersModel[]> = this.currentPage$.pipe(
    switchMap(data => this._beersService.getAllBeersByPageNumber(data)));

    readonly paginations$: Observable<{isFirst: boolean, isLast: boolean}> = combineLatest([
      this.currentPage$,
      this.beers$
    ]).pipe(
      map(([currentPage, beers]) => ({
        isFirst: currentPage === 1,
        isLast: beers.length < 10
      }))
    )

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onPrevClicked(): void {
    this.currentPage$.pipe(
      take(1),
      tap((currentPage) => {
        this._router.navigate([], {
          queryParams: {page: currentPage - 1}
        })
      })
    ).subscribe()


  }
onNextClicked(): void {
  this.currentPage$.pipe(
    take(1),
    tap((currentPage) => {
      this._router.navigate([], {
        queryParams: {page: currentPage + 1}
      })
    })
  ).subscribe()
}

}
