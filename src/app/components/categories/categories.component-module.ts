import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './categories.component';
import {MatListModule} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatListModule, NgForOf],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
