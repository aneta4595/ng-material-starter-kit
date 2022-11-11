import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedProductsComponent } from './sorted-products.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [SortedProductsComponent],
  providers: [],
  exports: [SortedProductsComponent]
})
export class SortedProductsComponentModule {
}
