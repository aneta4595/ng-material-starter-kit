import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CartFormComponent } from './cart-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
  ],
  declarations: [CartFormComponent],
  providers: [],
  exports: [CartFormComponent],
})
export class CartFormComponentModule {}
