import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterRadioButtonsComponent } from './register-radio-buttons.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule],
  declarations: [RegisterRadioButtonsComponent],
  providers: [],
  exports: [RegisterRadioButtonsComponent]
})
export class RegisterRadioButtonsComponentModule {
}
