import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { LoginComponent } from './components/login.component';
import { ThanksComponent } from './components/thanks.component';
import { CartComponent } from './components/cart.component';
import { PrivateComponent } from './components/private.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent},
  { path: 'thanks', component: ThanksComponent},
  { path: 'cart', component: CartComponent},
  { path: 'loginsuccess', component: PrivateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
