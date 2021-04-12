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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const typeorm_1 = require("typeorm");
const LocalAnalysis_1 = require("./LocalAnalysis");
let Local = class Local {
    constructor(name, description, lat, lng) {
        this.name = name;
        this.description = description;
        this.lat = lat;
        this.lng = lng;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Local.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Local.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Local.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('float'),
    __metadata("design:type", Number)
], Local.prototype, "lat", void 0);
__decorate([
    typeorm_1.Column('float'),
    __metadata("design:type", Number)
], Local.prototype, "lng", void 0);
__decorate([
    typeorm_1.OneToMany(type => LocalAnalysis_1.LocalAnalysis, localAnalysis => localAnalysis.local),
    __metadata("design:type", Array)
], Local.prototype, "comments", void 0);
Local = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [String, String, Number, Number])
], Local);
exports.Local = Local;
