import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { UserLoginComponentModule } from './components/user-login/user-login.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'public-holidays', component: HolidaysComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: UserLoginComponent }, { path: 'register', component: RegisterComponent }]), ProductsComponentModule, CategoriesComponentModule, CryptoComponentModule, HolidaysComponentModule, CheckboxCategoriesComponentModule, CategoriesServiceModule, CategoriesMenuComponentModule, ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, UserLoginComponentModule, UserServiceModule, RegisterComponentModule, RegisterServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
