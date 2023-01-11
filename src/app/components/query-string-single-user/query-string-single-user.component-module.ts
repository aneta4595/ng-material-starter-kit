import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { QueryStringSingleUserComponent } from './query-string-single-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [QueryStringSingleUserComponent],
  providers: [],
  exports: [QueryStringSingleUserComponent]
})
export class QueryStringSingleUserComponentModule {
}
