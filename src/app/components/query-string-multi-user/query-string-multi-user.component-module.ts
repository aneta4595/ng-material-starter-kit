import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { QueryStringMultiUserComponent } from './query-string-multi-user.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule, MatGridListModule, MatTabsModule],
  declarations: [QueryStringMultiUserComponent],
  providers: [],
  exports: [QueryStringMultiUserComponent]
})
export class QueryStringMultiUserComponentModule {
}
