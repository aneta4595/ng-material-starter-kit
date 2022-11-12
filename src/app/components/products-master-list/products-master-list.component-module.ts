import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductsMasterListComponent } from './products-master-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductsMasterListComponent],
  providers: [],
  exports: [ProductsMasterListComponent]
})
export class ProductsMasterListComponentModule {
}
