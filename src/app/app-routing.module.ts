import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LimitSingleProductsComponent } from './components/limit-single-products/limit-single-products.component';
import { PaginationPaginatorBeersComponent } from './components/pagination-paginator-beers/pagination-paginator-beers.component';
import { PaginationSimpleBeersComponent } from './components/pagination-simple-beers/pagination-simple-beers.component';
import { PaginationCustomBeersComponent } from './components/pagination-custom-beers/pagination-custom-beers.component';
import { PaginationFrontendCitiesComponent } from './components/pagination-frontend-cities/pagination-frontend-cities.component';
import { LimitSingleProductsComponentModule } from './components/limit-single-products/limit-single-products.component-module';
import { PaginationPaginatorBeersComponentModule } from './components/pagination-paginator-beers/pagination-paginator-beers.component-module';
import { PaginationSimpleBeersComponentModule } from './components/pagination-simple-beers/pagination-simple-beers.component-module';
import { PaginationCustomBeersComponentModule } from './components/pagination-custom-beers/pagination-custom-beers.component-module';
import { PaginationFrontendCitiesComponentModule } from './components/pagination-frontend-cities/pagination-frontend-cities.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'limit-single-products', component: LimitSingleProductsComponent },
      { path: 'pagination-paginator-beers', component: PaginationPaginatorBeersComponent },
      { path: 'pagination-simple-beers', component: PaginationSimpleBeersComponent },
      { path: 'pagination-custom-beers', component: PaginationCustomBeersComponent },
      { path: 'pagination-frontend-cities', component: PaginationFrontendCitiesComponent },

    ]),
    LimitSingleProductsComponentModule,
    PaginationPaginatorBeersComponentModule,
    PaginationSimpleBeersComponentModule,
    PaginationCustomBeersComponentModule,
    PaginationFrontendCitiesComponentModule,

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
