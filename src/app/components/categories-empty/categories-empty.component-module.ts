import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesEmptyComponent } from './categories-empty.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesEmptyComponent],
  providers: [],
  exports: [CategoriesEmptyComponent]
})
export class CategoriesEmptyComponentModule {
}
