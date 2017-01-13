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
var product_service_1 = require('../services/product.service');
var CartComponent = (function () {
    function CartComponent(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    CartComponent.prototype.getallProduct = function () {
        var _this = this;
        this.productService.getallCart().then(function (allpro) { return _this.allpro = allpro; });
    };
    CartComponent.prototype.getsumTotal = function () {
        var _this = this;
        this.productService.getsumTotal().then(function (total) { return _this.total = total; });
    };
    CartComponent.prototype.ngOnInit = function () {
        this.getallProduct();
        this.getsumTotal();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: 'app/templates/cart.component.html',
            styleUrls: ['app/css/cart.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map