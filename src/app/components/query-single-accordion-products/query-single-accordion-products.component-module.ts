import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuerySingleAccordionProductsComponent } from './query-single-accordion-products.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule],
  declarations: [QuerySingleAccordionProductsComponent],
  providers: [],
  exports: [QuerySingleAccordionProductsComponent]
})
export class QuerySingleAccordionProductsComponentModule {
}
