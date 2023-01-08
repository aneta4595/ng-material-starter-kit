import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import {  MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { LimitSingleProductsComponent } from './limit-single-products.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    RouterModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: [LimitSingleProductsComponent],
  providers: [],
  exports: [LimitSingleProductsComponent],
})
export class LimitSingleProductsComponentModule { }
