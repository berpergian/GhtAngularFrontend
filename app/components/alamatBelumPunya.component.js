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
var AddressNotFoundComponent = (function () {
    function AddressNotFoundComponent() {
        this.items = ['DKI Jakarta', 'Bandung', 'Semarang'
        ];
        this.items1 = ['item 1', 'item 2', 'item 3', 'item 4'];
        this.items2 = ['item a', 'item b', 'item c', 'item d',
            'item e', 'item f', 'item g', 'item h',];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    Object.defineProperty(AddressNotFoundComponent.prototype, "disabledV", {
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
    AddressNotFoundComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    AddressNotFoundComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    AddressNotFoundComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    AddressNotFoundComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    AddressNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'alamatBelumPunya',
            templateUrl: 'app/templates/alamatBelumPunya.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AddressNotFoundComponent);
    return AddressNotFoundComponent;
}());
exports.AddressNotFoundComponent = AddressNotFoundComponent;
//# sourceMappingURL=alamatBelumPunya.component.js.map