import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartsComponent } from './carts.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CartsComponent],
  providers: [],
  exports: [CartsComponent]
})
export class CartsComponentModule {
}
