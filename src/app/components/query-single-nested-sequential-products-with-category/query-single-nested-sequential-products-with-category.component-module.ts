import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { QuerySingleNestedSequentialProductsWithCategoryComponent } from './query-single-nested-sequential-products-with-category.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatChipsModule],
  declarations: [QuerySingleNestedSequentialProductsWithCategoryComponent],
  providers: [],
  exports: [QuerySingleNestedSequentialProductsWithCategoryComponent]
})
export class QuerySingleNestedSequentialProductsWithCategoryComponentModule {
}
