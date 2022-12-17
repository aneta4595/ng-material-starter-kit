import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LimitProductsComponent } from './components/limit-products/limit-products.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { ProductsServiceModule } from './services/products.service-module';
import { LimitProductsComponentModule } from './components/limit-products/limit-products.component-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'limit-products', component: LimitProductsComponent },
      { path: 'products', component: ProductSearchComponent },
      { path: 'search-universities', component: UniversitiesComponent }
    ]),
    ProductsServiceModule,
    LimitProductsComponentModule,
    ProductSearchComponentModule,
    UniversitiesComponentModule,
    UniversitiesServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
