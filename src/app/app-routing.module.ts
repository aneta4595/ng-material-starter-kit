import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'public-holidays', component: HolidaysComponent }]), ProductsComponentModule, CategoriesComponentModule, CryptoComponentModule, HolidaysComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
