import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-pagination-paginator-beers',
  templateUrl: './pagination-paginator-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationPaginatorBeersComponent {
  readonly paginatorData$: Observable<{
    pageNumber: number;
    pageSize: number;
    pageSizeOptions: number[];
  }> = this._activatedRoute.queryParams.pipe(
    map((params) => {
      return {
        pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
        pageSize: params['pageSize'] ? params['pageSize'] : 5,
        pageSizeOptions: [5, 10, 15]
      }
    })
  )
  readonly beers$: Observable<BeersModel[]> = this.paginatorData$.pipe(
    switchMap(data => this._beersService.getAllBeers(data.pageNumber, data.pageSize)));

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }
  onPageChange(event: { pageIndex: number, pageSize: number }): void {
      this._router.navigate([], {
        queryParams: {
          pageNumber: event.pageIndex + 1,
          pageSize: event.pageSize
        }
      })
  }
}
