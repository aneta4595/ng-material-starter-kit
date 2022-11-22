import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },

    ]),
    ProductsComponentModule,
    ProductsServiceModule,
    CategoriesServiceModule,

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
