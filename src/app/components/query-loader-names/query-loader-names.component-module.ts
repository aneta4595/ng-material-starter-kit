import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { QueryLoaderNamesComponent } from './query-loader-names.component';

@NgModule({
  imports: [MatProgressSpinnerModule, MatListModule, CommonModule],
  declarations: [QueryLoaderNamesComponent],
  providers: [],
  exports: [QueryLoaderNamesComponent]
})
export class QueryLoaderNamesComponentModule {
}
