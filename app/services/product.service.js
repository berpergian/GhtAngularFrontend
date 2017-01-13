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
var mock_allproduct_1 = require('../mock/mock-allproduct');
var mock_cart_1 = require('../mock/mock-cart');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getallProduct = function () {
        return Promise.resolve(mock_allproduct_1.PRODUCTS);
    };
    ProductService.prototype.getallCart = function () {
        return Promise.resolve(mock_cart_1.Cart);
    };
    ProductService.prototype.getProduct = function (kode) {
        return this.getallProduct()
            .then(function (allpro) { return allpro.find(function (product) { return product.kode === kode; }); });
    };
    ProductService.prototype.getallMenu = function () {
        var _this = this;
        this.getallProduct().then(function (allpro) { return _this.allpro = allpro; });
    };
    ProductService.prototype.getsumTotal = function () {
        var total = 0;
        for (var _i = 0, Cart_1 = mock_cart_1.Cart; _i < Cart_1.length; _i++) {
            var cart = Cart_1[_i];
            total += cart.harga;
        }
        return Promise.resolve(total);
    };
    ProductService.prototype.removeitemCart = function (index) {
        if (index > -1) {
            this.allpro.splice(index, 1);
        }
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map