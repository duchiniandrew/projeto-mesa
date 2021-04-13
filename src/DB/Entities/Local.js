"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Local = void 0;
var typeorm_1 = require("typeorm");
var LocalAnalysis_1 = require("./LocalAnalysis");
var Local = /** @class */ (function () {
    function Local(name, description, lat, lng) {
        this.name = name;
        this.description = description;
        this.lat = lat;
        this.lng = lng;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment')
    ], Local.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Local.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Local.prototype, "description");
    __decorate([
        typeorm_1.Column('float')
    ], Local.prototype, "lat");
    __decorate([
        typeorm_1.Column('float')
    ], Local.prototype, "lng");
    __decorate([
        typeorm_1.OneToMany(function (type) { return LocalAnalysis_1.LocalAnalysis; }, function (localAnalysis) { return localAnalysis.local; })
    ], Local.prototype, "comments");
    Local = __decorate([
        typeorm_1.Entity()
    ], Local);
    return Local;
}());
exports.Local = Local;
