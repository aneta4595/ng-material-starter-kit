import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListRoutingComponent } from './components/filtered-list-routing/filtered-list-routing.component';
import { FilteredListSubjectComponent } from './components/filtered-list-subject/filtered-list-subject.component';
import { SortedProductsComponent } from './components/sorted-products/sorted-products.component';
import { SortEmployeeComponent } from './components/sort-employee/sort-employee.component';
import { FilteredEmployeeComponent } from './components/filtered-employee/filtered-employee.component';
import { ProductsDeleteComponent } from './components/products-delete/products-delete.component';
import { ProductsMasterListComponent } from './components/products-master-list/products-master-list.component';
import { EmployeeMasterComponent } from './components/employee-master/employee-master.component';
import { CryptoMasterDetailsComponent } from './components/crypto-master-details/crypto-master-details.component';
import { ProductsEmptyComponent } from './components/products-empty/products-empty.component';
import { CategoriesEmptyComponent } from './components/categories-empty/categories-empty.component';
import { CryptoEmptyComponent } from './components/crypto-empty/crypto-empty.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CategoriesCheckboxEmptyComponent } from './components/categories-checkbox-empty/categories-checkbox-empty.component';
import { FilteredListRoutingComponentModule } from './components/filtered-list-routing/filtered-list-routing.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FilteredListSubjectComponentModule } from './components/filtered-list-subject/filtered-list-subject.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductsComponentModule } from './components/sorted-products/sorted-products.component-module';
import { SortEmployeeComponentModule } from './components/sort-employee/sort-employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { FilteredEmployeeComponentModule } from './components/filtered-employee/filtered-employee.component-module';
import { ProductsDeleteComponentModule } from './components/products-delete/products-delete.component-module';
import { ProductsMasterListComponentModule } from './components/products-master-list/products-master-list.component-module';
import { EmployeeMasterComponentModule } from './components/employee-master/employee-master.component-module';
import { CryptoMasterDetailsComponentModule } from './components/crypto-master-details/crypto-master-details.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';
import { ProductsEmptyComponentModule } from './components/products-empty/products-empty.component-module';
import { CategoriesEmptyComponentModule } from './components/categories-empty/categories-empty.component-module';
import { CryptoEmptyComponentModule } from './components/crypto-empty/crypto-empty.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CategoriesCheckboxEmptyComponentModule } from './components/categories-checkbox-empty/categories-checkbox-empty.component-module';

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredListRoutingComponent }, { path: 'products', component: FilteredListSubjectComponent }, { path: 'sorted-products', component: SortedProductsComponent }, { path: 'sorted-employee', component: SortEmployeeComponent }, { path: 'employee/:age', component: FilteredEmployeeComponent }, { path: 'refresh-products', component: ProductsDeleteComponent }, { path: 'products-master-details', component: ProductsMasterListComponent }, { path: 'employees-master-details', component: EmployeeMasterComponent }, { path: 'crypto-master-details', component: CryptoMasterDetailsComponent }, { path: 'productss', component: ProductsEmptyComponent }, { path: 'categoriess', component: CategoriesEmptyComponent }, { path: 'cryptos', component: CryptoEmptyComponent }, { path: 'public-holidays', component: HolidaysComponent }, { path: 'checkbox-categories', component: CategoriesCheckboxEmptyComponent }]), FilteredListRoutingComponentModule, CategoriesServiceModule, FilteredListSubjectComponentModule, ProductsServiceModule, SortedProductsComponentModule, SortEmployeeComponentModule, EmployeeServiceModule, FilteredEmployeeComponentModule, ProductsDeleteComponentModule, ProductsMasterListComponentModule, EmployeeMasterComponentModule, CryptoMasterDetailsComponentModule, CryptoCurrencyServiceModule, ProductsEmptyComponentModule, CategoriesEmptyComponentModule, CryptoEmptyComponentModule, HolidaysComponentModule, HolidaysServiceModule, CategoriesCheckboxEmptyComponentModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
