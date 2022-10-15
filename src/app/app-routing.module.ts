import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'public-holidays', component: HolidaysComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }]), ProductsComponentModule, CategoriesComponentModule, CryptoComponentModule, HolidaysComponentModule, CheckboxCategoriesComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
