import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { JokeComponent } from './joke.component';


@NgModule({
  imports: [MatCardModule, CommonModule,  MatButtonToggleModule, RouterModule],
  declarations: [JokeComponent],
  providers: [],
  exports: [JokeComponent]
})
export class JokeComponentModule {
}
