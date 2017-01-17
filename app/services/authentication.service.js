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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        //this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (email, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        /*var authenticatedUser = USER.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password){
          localStorage.setItem("user", JSON.stringify(authenticatedUser));
          this._router.navigate(['loginsuccess']);
          return true;
        }
        return false;*/
        /*return this.http.post('<API>',JSON.stringify({email,password})),{headers}
        .map(res => res.json())
        .map((res) =>{
          if(res.success){
            localStorage.setItem('auth_token', res.auth_token);
          }
          return res.success;
        });*/
        return this.http
            .post('<API>', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                localStorage.setItem('auth_token', res.auth_token);
            }
            return res.success;
        });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map