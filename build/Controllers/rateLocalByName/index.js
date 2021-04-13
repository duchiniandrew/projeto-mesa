"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
function rateLocalByName(req, res) {
    try {
        validation_1.default(req);
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = rateLocalByName;
