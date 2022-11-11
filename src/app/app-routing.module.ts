import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListRoutingComponent } from './components/filtered-list-routing/filtered-list-routing.component';
import { FilteredListSubjectComponent } from './components/filtered-list-subject/filtered-list-subject.component';
import { SortedProductsComponent } from './components/sorted-products/sorted-products.component';
import { SortEmployeeComponent } from './components/sort-employee/sort-employee.component';
import { FilteredEmployeeComponent } from './components/filtered-employee/filtered-employee.component';
import { FilteredListRoutingComponentModule } from './components/filtered-list-routing/filtered-list-routing.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FilteredListSubjectComponentModule } from './components/filtered-list-subject/filtered-list-subject.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductsComponentModule } from './components/sorted-products/sorted-products.component-module';
import { SortEmployeeComponentModule } from './components/sort-employee/sort-employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { FilteredEmployeeComponentModule } from './components/filtered-employee/filtered-employee.component-module';

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredListRoutingComponent }, { path: 'products', component: FilteredListSubjectComponent }, { path: 'sorted-products', component: SortedProductsComponent }, { path: 'sorted-employee', component: SortEmployeeComponent }, { path: 'employee', component: FilteredEmployeeComponent }]), FilteredListRoutingComponentModule, CategoriesServiceModule, FilteredListSubjectComponentModule, ProductsServiceModule, SortedProductsComponentModule, SortEmployeeComponentModule, EmployeeServiceModule, FilteredEmployeeComponentModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
