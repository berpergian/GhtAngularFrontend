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
require('rxjs/add/observable/of');
var core_1 = require('@angular/core');
var reviewComponent = (function () {
    function reviewComponent() {
        this.orderNumber = '141524008';
        this.total = 1000000;
        this.title = 'Review Order';
        this.nama = 'Dani Cordora';
        this.propinsi = 'Jawa Barat';
        this.kota = 'Bandung';
        this.kec = 'Cibiru';
        this.noHP = '085 - 678 - 999 -99';
        this.checkboxes = { label: 'I read and accept Term of Use and Privacy Policy' };
        console.clear();
    }
    reviewComponent.prototype.buttonState = function () {
        console.log('buttonState() called');
        return !this.checkboxes.some(function (_) { return _.state; });
    };
    Object.defineProperty(reviewComponent.prototype, "debug", {
        get: function () {
            return JSON.stringify(this.checkboxes);
        },
        enumerable: true,
        configurable: true
    });
    reviewComponent = __decorate([
        core_1.Component({
            selector: 'review',
            templateUrl: 'app/templates/review.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], reviewComponent);
    return reviewComponent;
}());
exports.reviewComponent = reviewComponent;
//# sourceMappingURL=review.component.js.map