"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllLocals_1 = __importDefault(require("../../Services/getAllLocals"));
async function getAllLocals() {
    return getAllLocals_1.default();
}
exports.default = getAllLocals;
