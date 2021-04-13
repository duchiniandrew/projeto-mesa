"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocalAnalysis = void 0;
var typeorm_1 = require("typeorm");
var Local_1 = require("./Local");
var LocalAnalysis = /** @class */ (function () {
    function LocalAnalysis(rating, comments, local) {
        this.rating = rating;
        this.comments = comments;
        this.local = local;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment')
    ], LocalAnalysis.prototype, "id");
    __decorate([
        typeorm_1.Column('float')
    ], LocalAnalysis.prototype, "rating");
    __decorate([
        typeorm_1.Column()
    ], LocalAnalysis.prototype, "comments");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Local_1.Local; }, function (local) { return local.comments; })
    ], LocalAnalysis.prototype, "local");
    LocalAnalysis = __decorate([
        typeorm_1.Entity()
    ], LocalAnalysis);
    return LocalAnalysis;
}());
exports.LocalAnalysis = LocalAnalysis;
