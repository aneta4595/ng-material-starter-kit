import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {UserServiceModule} from "./services/user.service-module";
import {JobServiceModule} from "./services/job.service-module";




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    UserServiceModule,
    JobServiceModule,
    BrowserAnimationsModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
