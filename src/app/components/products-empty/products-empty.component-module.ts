import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsEmptyComponent } from './products-empty.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ProductsEmptyComponent],
  providers: [],
  exports: [ProductsEmptyComponent]
})
export class ProductsEmptyComponentModule {
}
