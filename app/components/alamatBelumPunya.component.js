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
var alamatBelumPunya = (function () {
    function alamatBelumPunya() {
        this.items = ['DKI Jakarta', 'Bandung', 'Semarang', 'Surabaya',
        ];
        this.items1 = ['item 1', 'item 2', 'item 3', 'item 4',
            'item 5'];
        this.items2 = ['item a', 'item b', 'item c', 'item d',
            'item e'];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    Object.defineProperty(alamatBelumPunya.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    alamatBelumPunya.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    alamatBelumPunya.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    alamatBelumPunya.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    alamatBelumPunya.prototype.refreshValue = function (value) {
        this.value = value;
    };
    alamatBelumPunya = __decorate([
        core_1.Component({
            selector: 'alamatBelumPunya',
            templateUrl: 'app/templates/alamatBelumPunya.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], alamatBelumPunya);
    return alamatBelumPunya;
}());
exports.alamatBelumPunya = alamatBelumPunya;
//# sourceMappingURL=alamatBelumPunya.component.js.map