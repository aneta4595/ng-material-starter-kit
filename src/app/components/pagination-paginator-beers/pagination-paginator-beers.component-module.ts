import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PaginationPaginatorBeersComponent } from './pagination-paginator-beers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatPaginatorModule, MatCardModule, MatChipsModule, CommonModule, RouterModule],
  declarations: [PaginationPaginatorBeersComponent],
  providers: [],
  exports: [PaginationPaginatorBeersComponent]
})
export class PaginationPaginatorBeersComponentModule {
}
