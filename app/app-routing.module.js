"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var product_component_1 = require('./components/product.component');
var login_component_1 = require('./components/login.component');
var thanks_component_1 = require('./components/thanks.component');
var cart_component_1 = require('./components/cart.component');
var private_component_1 = require('./components/private.component');
var alamatPunya_component_1 = require('./components/alamatPunya.component');
var alamatBelumPunya_component_1 = require('./components/alamatBelumPunya.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'thanks', component: thanks_component_1.ThanksComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'loginsuccess', component: private_component_1.PrivateComponent },
    { path: 'addressnotfound', component: alamatBelumPunya_component_1.AddressNotFoundComponent },
    { path: 'addressfound', component: alamatPunya_component_1.AddressFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map