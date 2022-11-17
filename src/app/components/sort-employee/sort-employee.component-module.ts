import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortEmployeeComponent } from './sort-employee.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, HttpClientModule],
  declarations: [SortEmployeeComponent],
  providers: [],
  exports: [SortEmployeeComponent]
})
export class SortEmployeeComponentModule {
}
