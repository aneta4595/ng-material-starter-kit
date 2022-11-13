import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesCheckboxEmptyComponent } from './categories-checkbox-empty.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesCheckboxEmptyComponent],
  providers: [],
  exports: [CategoriesCheckboxEmptyComponent]
})
export class CategoriesCheckboxEmptyComponentModule {
}
