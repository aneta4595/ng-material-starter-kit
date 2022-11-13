import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductsServiceModule} from "./services/products.service-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {CryptoCurrencyServiceModule} from "./services/crypto-currency.service-module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ProductsServiceModule,
    EmployeeServiceModule,
    CryptoCurrencyServiceModule,
    CategoriesServiceModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
