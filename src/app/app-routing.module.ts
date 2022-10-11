import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { HomeComponentModule } from './components/home/home.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: '', component: HomeComponent }]), ProductsComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
