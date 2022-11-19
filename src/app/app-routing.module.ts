import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterRadioButtonsComponent } from './components/register-radio-buttons/register-radio-buttons.component';
import { JobComponent } from './components/job/job.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RoleServiceModule } from './services/role.service-module';
import { RegisterRadioButtonsComponentModule } from './components/register-radio-buttons/register-radio-buttons.component-module';
import { JobComponentModule } from './components/job/job.component-module';
import { ProductsCartComponentModule } from './components/products-cart/products-cart.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-user-with-role', component: RegisterFormComponent },
      { path: 'create-user-buttons', component: RegisterRadioButtonsComponent },
      { path: 'create-job', component: JobComponent },
      { path: 'product', component: ProductsCartComponent },
      { path: ':userId/cart', component: ProductsCartComponent },
      { path: 'product-search', component: ProductSearchComponent }
    ]),
    RegisterFormComponentModule,
    RoleServiceModule,
    RegisterRadioButtonsComponentModule,
    JobComponentModule,
    ProductsCartComponentModule,
    ProductsServiceModule,
    ProductSearchComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
