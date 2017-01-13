import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { LoginComponent } from './components/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ThanksComponent } from './components/thanks.component';
import { CartComponent } from './components/cart.component';

import { ProductService } from './services/product.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
  BrowserModule,
  HttpModule,
  FormsModule,
  AppRoutingModule
  ],
  declarations: [
  AppComponent,
  HomeComponent,
  ProductComponent,
  LoginComponent,
  ThanksComponent,
  CartComponent
  ],
  providers: [ ProductService, AuthenticationService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
