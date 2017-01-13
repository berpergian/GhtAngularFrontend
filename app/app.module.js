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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home.component');
var product_component_1 = require('./components/product.component');
var login_component_1 = require('./components/login.component');
var app_routing_module_1 = require('./app-routing.module');
var thanks_component_1 = require('./components/thanks.component');
var cart_component_1 = require('./components/cart.component');
var private_component_1 = require('./components/private.component');
var alamatPunya_component_1 = require('./components/alamatPunya.component');
var alamatBelumPunya_component_1 = require('./components/alamatBelumPunya.component');
var product_service_1 = require('./services/product.service');
var authentication_service_1 = require('./services/authentication.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                product_component_1.ProductComponent,
                login_component_1.LoginComponent,
                thanks_component_1.ThanksComponent,
                cart_component_1.CartComponent,
                private_component_1.PrivateComponent,
                alamatPunya_component_1.AddressFoundComponent,
                alamatBelumPunya_component_1.AddressNotFoundComponent
            ],
            providers: [product_service_1.ProductService, authentication_service_1.AuthenticationService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map