import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, combineLatest, of, tap, take} from 'rxjs';
import { map } from 'rxjs/operators';
import { CitiesModel } from '../../models/cities.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-pagination-frontend-cities',
  templateUrl: './pagination-frontend-cities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationFrontendCitiesComponent {
  readonly pageSize$: Observable<number[]> = of([5, 10, 15]);

  readonly pageNumber$: Observable<number[]> = of([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
  ]);
  private _numberCitiesSubject: ReplaySubject<number> = new ReplaySubject<number>();
  public numberCities$: Observable<number> = this._numberCitiesSubject.asObservable();

  readonly cities$: Observable<CitiesModel[]> = this._citiesService.getAllCities().pipe(
    tap((data) => this.getNumberCities(data))
  )

  readonly currentPage$: Observable<{ pageNumber: number; pageSize: number }> =
    this._activatedRoute.queryParams.pipe(
      map((params) => {
        return {
          pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
          pageSize: params['pageSize'] ? +params['pageSize'] : 5,
        };
      })
    );
  readonly citiesPagination$: Observable<CitiesModel[]> = combineLatest([
    this.currentPage$,
    this.cities$,
  ]).pipe(
    map(([currentPage, cities]) =>
      cities.slice(
        (currentPage.pageNumber - 1) * currentPage.pageSize,
        currentPage.pageNumber * currentPage.pageSize
      )
    )
  );


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _citiesService: CitiesService,
    private _router: Router
  ) { }

getNumberCities(cities: CitiesModel[]) : void {
  this._numberCitiesSubject.next(cities.length)
}
onSizeChange(isSelected:boolean, params:{pageNumber:number, pageSize: number}, selectedSize: number): void {
  if(isSelected) {
    this.numberCities$.pipe(
      take(1),
      tap((number) => {
        this._router.navigate([], {
          queryParams: {
            pageSize: selectedSize,
            pageNumber: params.pageNumber <= Math.ceil(number / selectedSize)
            ? params.pageNumber
            : Math.ceil(number / selectedSize)
          }
        })
      })
    ).subscribe()
  }
}

}
