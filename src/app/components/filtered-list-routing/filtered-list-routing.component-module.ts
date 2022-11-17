import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredListRoutingComponent } from './filtered-list-routing.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterModule],
  declarations: [FilteredListRoutingComponent],
  providers: [],
  exports: [FilteredListRoutingComponent]
})
export class FilteredListRoutingComponentModule {
}
