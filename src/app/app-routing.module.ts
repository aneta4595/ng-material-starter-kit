import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgeComponent } from './components/age/age.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-facts', component: CatFactsComponent }, { path: 'age/:name', component: AgeComponent }, { path: 'product/:id', component: ProductComponent }, { path: 'cart/:id', component: CartComponent }, { path: 'user/:id', component: UserComponent }]), CatFactsComponentModule, CatServiceModule, AgeComponentModule, AgeServiceModule, ProductComponentModule, ProductServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule],
  exports: [RouterModule]
})

export class AppRoutingModule
{

}
