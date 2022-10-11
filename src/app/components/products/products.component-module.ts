import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
       CommonModule
    ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}
