import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatServiceModule } from './services/cat.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'cat-facts', component: CatFactsComponent }]), CatFactsComponentModule, CatServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
