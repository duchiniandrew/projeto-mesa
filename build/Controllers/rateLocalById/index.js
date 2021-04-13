"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rateLocalById_1 = __importDefault(require("../../Services/rateLocalById"));
const validation_1 = __importDefault(require("./validation"));
async function rateLocalById(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(201).json(await rateLocalById_1.default(req.body.rate, req.body.comment, req.body.localId));
        }
        catch (error) {
            res.status(error.code).json({ message: error.message });
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = rateLocalById;
