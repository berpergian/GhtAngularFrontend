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
var authentication_service_1 = require('../services/authentication.service');
var router_1 = require('@angular/router');
var customer_1 = require('../class/customer');
var LoginComponent = (function () {
    function LoginComponent(_router, _service) {
        this._router = _router;
        this._service = _service;
        this.judul = 'Login to Your Account';
        this.user = new customer_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.onSumbitLgn = function () {
        var _this = this;
        this._service.login(this.user.email, this.user.password).subscribe(function (result) {
            if (result) {
                _this._router.navigate(['loginsuccess']);
            }
            else {
                _this.errorMsg = 'Failed to login';
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/templates/login.component.html',
            styleUrls: ['app/css/login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map