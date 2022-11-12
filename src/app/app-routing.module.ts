import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListRoutingComponent } from './components/filtered-list-routing/filtered-list-routing.component';
import { FilteredListSubjectComponent } from './components/filtered-list-subject/filtered-list-subject.component';
import { SortedProductsComponent } from './components/sorted-products/sorted-products.component';
import { SortEmployeeComponent } from './components/sort-employee/sort-employee.component';
import { FilteredEmployeeComponent } from './components/filtered-employee/filtered-employee.component';
import { ProductsDeleteComponent } from './components/products-delete/products-delete.component';
import { ProductsMasterListComponent } from './components/products-master-list/products-master-list.component';
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

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredListRoutingComponent }, { path: 'products', component: FilteredListSubjectComponent }, { path: 'sorted-products', component: SortedProductsComponent }, { path: 'sorted-employee', component: SortEmployeeComponent }, { path: 'employee/:age', component: FilteredEmployeeComponent }, { path: 'refresh-products', component: ProductsDeleteComponent }, { path: 'products-master-details', component: ProductsMasterListComponent }]), FilteredListRoutingComponentModule, CategoriesServiceModule, FilteredListSubjectComponentModule, ProductsServiceModule, SortedProductsComponentModule, SortEmployeeComponentModule, EmployeeServiceModule, FilteredEmployeeComponentModule, ProductsDeleteComponentModule, ProductsMasterListComponentModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
