import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { PaginationFrontendCitiesComponent } from './pagination-frontend-cities.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    ReactiveFormsModule,
    MatOptionModule,
    FlexModule,
  ],
  declarations: [PaginationFrontendCitiesComponent],
  providers: [],
  exports: [PaginationFrontendCitiesComponent],
})
export class PaginationFrontendCitiesComponentModule {}
