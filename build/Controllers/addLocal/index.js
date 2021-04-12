"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
const addLocal_1 = __importDefault(require("../../Services/addLocal"));
async function addLocal(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(201).json(await addLocal_1.default(req.body));
        }
        catch (error) {
            res.status(error.code).json(error.message);
        }
    }
    catch (error) {
        res.status(error.code).json(error.message);
    }
}
exports.default = addLocal;
