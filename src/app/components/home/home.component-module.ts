import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        RouterLinkWithHref
    ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
