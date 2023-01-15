import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { QueryMultiAccordionOrganizationsComponent } from './query-multi-accordion-organizations.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule, MatListModule],
  declarations: [QueryMultiAccordionOrganizationsComponent],
  providers: [],
  exports: [QueryMultiAccordionOrganizationsComponent]
})
export class QueryMultiAccordionOrganizationsComponentModule {
}
