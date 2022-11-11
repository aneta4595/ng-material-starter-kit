import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredListRoutingComponent } from './components/filtered-list-routing/filtered-list-routing.component';
import { FilteredListSubjectComponent } from './components/filtered-list-subject/filtered-list-subject.component';
import { FilteredListRoutingComponentModule } from './components/filtered-list-routing/filtered-list-routing.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FilteredListSubjectComponentModule } from './components/filtered-list-subject/filtered-list-subject.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({

  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredListRoutingComponent }, { path: 'products', component: FilteredListSubjectComponent }]), FilteredListRoutingComponentModule, CategoriesServiceModule, FilteredListSubjectComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
