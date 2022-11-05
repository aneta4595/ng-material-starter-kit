import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgeComponent } from './components/age/age.component';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'cat-facts', component: CatFactsComponent }, {
    path: 'age/:name', component: AgeComponent }]),

    CatFactsComponentModule, CatServiceModule, AgeComponentModule, AgeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
