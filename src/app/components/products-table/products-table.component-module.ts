import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProductsTableComponent } from './products-table.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [MatCardModule, MatTableModule, CommonModule],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent]
})
export class ProductsTableComponentModule {
}
