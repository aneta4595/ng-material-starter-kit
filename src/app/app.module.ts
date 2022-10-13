import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductsComponentModule} from "./components/products/products.component-module";
import {ProductsServiceModule} from "./services/products.service-module";
import {CryptoServiceModule} from "./services/crypto.service-module";
import {CategoriesServiceModule} from "./services/categories.service-module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CryptoServiceModule,
    CategoriesServiceModule,
    AppRoutingModule,
    ProductsServiceModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
