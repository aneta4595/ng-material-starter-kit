import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredListSubjectComponent } from './filtered-list-subject.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule, RouterModule],
  declarations: [FilteredListSubjectComponent],
  providers: [],
  exports: [FilteredListSubjectComponent]
})
export class FilteredListSubjectComponentModule {
}
