import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListRoutingComponent } from './components/filtered-list-routing/filtered-list-routing.component';
import { FilteredListSubjectComponent } from './components/filtered-list-subject/filtered-list-subject.component';
import { SortedProductsComponent } from './components/sorted-products/sorted-products.component';
import { FilteredListRoutingComponentModule } from './components/filtered-list-routing/filtered-list-routing.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FilteredListSubjectComponentModule } from './components/filtered-list-subject/filtered-list-subject.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductsComponentModule } from './components/sorted-products/sorted-products.component-module';

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredListRoutingComponent }, { path: 'products', component: FilteredListSubjectComponent }, { path: 'sorted-products', component: SortedProductsComponent }]), FilteredListRoutingComponentModule, CategoriesServiceModule, FilteredListSubjectComponentModule, ProductsServiceModule, SortedProductsComponentModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
