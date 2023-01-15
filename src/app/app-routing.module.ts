import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuerySingleAccordionProductsComponent } from './components/query-single-accordion-products/query-single-accordion-products.component';
import { QueryMultiAccordionOrganizationsComponent } from './components/query-multi-accordion-organizations/query-multi-accordion-organizations.component';
import { QuerySingleNestedSequentialProductsWithCategoryComponent } from './components/query-single-nested-sequential-products-with-category/query-single-nested-sequential-products-with-category.component';
import { QuerySingleAccordionProductsComponentModule } from './components/query-single-accordion-products/query-single-accordion-products.component-module';
import { QueryMultiAccordionOrganizationsComponentModule } from './components/query-multi-accordion-organizations/query-multi-accordion-organizations.component-module';
import { QuerySingleNestedSequentialProductsWithCategoryComponentModule } from './components/query-single-nested-sequential-products-with-category/query-single-nested-sequential-products-with-category.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'query-single-accordion-products', component: QuerySingleAccordionProductsComponent },
      { path: 'query-multi-accordion-organizations', component: QueryMultiAccordionOrganizationsComponent },
      { path: 'query-single-nested-sequential-products-with-category', component: QuerySingleNestedSequentialProductsWithCategoryComponent }
    ]),
    QuerySingleAccordionProductsComponentModule,
    QueryMultiAccordionOrganizationsComponentModule,
    QuerySingleNestedSequentialProductsWithCategoryComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
