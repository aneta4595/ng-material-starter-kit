import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }]), ProductsComponentModule, CategoriesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
