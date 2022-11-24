import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { BeersComponent } from './beers.component';
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
    imports: [MatListModule, CommonModule, MatPaginatorModule,],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent]
})
export class BeersComponentModule {
}
