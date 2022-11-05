import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgeComponent } from './components/age/age.component';
import { ProductComponent } from './components/product/product.component';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-facts', component: CatFactsComponent }, { path: 'age/:name', component: AgeComponent }, { path: 'product/:id', component: ProductComponent }]), CatFactsComponentModule, CatServiceModule, AgeComponentModule, AgeServiceModule, ProductComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
