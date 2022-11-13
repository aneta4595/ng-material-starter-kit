import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoEmptyComponent } from './crypto-empty.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CryptoEmptyComponent],
  providers: [],
  exports: [CryptoEmptyComponent]
})
export class CryptoEmptyComponentModule {
}
