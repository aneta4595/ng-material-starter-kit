import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { PaginationCustomBeersComponent } from './pagination-custom-beers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatListModule,
  ],
  declarations: [PaginationCustomBeersComponent],
  providers: [],
  exports: [PaginationCustomBeersComponent],
})
export class PaginationCustomBeersComponentModule {}
