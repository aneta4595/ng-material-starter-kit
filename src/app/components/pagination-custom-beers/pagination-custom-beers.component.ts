import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { __values } from 'tslib';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-pagination-custom-beers',
  templateUrl: './pagination-custom-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationCustomBeersComponent implements AfterViewInit {

  readonly paginationForm: FormGroup = new FormGroup({ limit: new FormControl(), page: new FormControl() });

  readonly limitOptions$: Observable<number[]> = of([5, 10, 15]);
  readonly pageSelection$: Observable<number[]> = of([1, 2, 3, 4, 5]);

  readonly currentPage$: Observable<{ pageNumber: number; pageSize: number }> =
    this._activatedRoute.queryParams.pipe(
      map((params) => {
        return {
          pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
          pageSize: params['pageSize'] ? +params['pageSize'] : 5,
        };
      })
    )


  readonly beers$: Observable<BeersModel[]> = this.currentPage$.pipe(
    switchMap((data) =>
      this._beersService.getAllBeers(data.pageNumber, data.pageSize)))


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _beersService: BeersService, private _router: Router
  ) { }

  onPaginationFormSubmitted(paginationForm: FormGroup): void {
  }

  ngAfterViewInit(): void {
      this.paginationForm.valueChanges.subscribe((value) => 
      this._router.navigate([], {
        queryParams: {
          pageNumber: value.page,
          pageSize: value.limit 
        }
      })
      )
  }
}
