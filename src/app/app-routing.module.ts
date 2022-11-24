import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterRadioButtonsComponent } from './components/register-radio-buttons/register-radio-buttons.component';
import { JobComponent } from './components/job/job.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { UniversityComponent } from './components/university/university.component';
import { CryptoAutocompleteComponent } from './components/crypto-autocomplete/crypto-autocomplete.component';
import { BeersComponent } from './components/beers/beers.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RoleServiceModule } from './services/role.service-module';
import { RegisterRadioButtonsComponentModule } from './components/register-radio-buttons/register-radio-buttons.component-module';
import { JobComponentModule } from './components/job/job.component-module';
import { ProductsCartComponentModule } from './components/products-cart/products-cart.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { UniversityComponentModule } from './components/university/university.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { CryptoAutocompleteComponentModule } from './components/crypto-autocomplete/crypto-autocomplete.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { BeersComponentModule } from './components/beers/beers.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-user-with-role', component: RegisterFormComponent },
      { path: 'create-user-buttons', component: RegisterRadioButtonsComponent },
      { path: 'create-job', component: JobComponent },
      { path: 'product', component: ProductsCartComponent },
      { path: ':userId/cart', component: ProductsCartComponent },
      { path: 'product-search', component: ProductSearchComponent },
      { path: 'search-universities', component: UniversityComponent },
      { path: 'crypto-autocomplete', component: CryptoAutocompleteComponent },
      { path: 'beers-with-pagination', component: BeersComponent }
    ]),
    RegisterFormComponentModule,
    RoleServiceModule,
    RegisterRadioButtonsComponentModule,
    JobComponentModule,
    ProductsCartComponentModule,
    ProductsServiceModule,
    ProductSearchComponentModule,
    UniversityComponentModule,
    UniversityServiceModule,
    CryptoAutocompleteComponentModule,
    CryptoServiceModule,
    BeersComponentModule,
    BeersServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
