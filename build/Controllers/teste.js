"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teste_1 = __importDefault(require("../Services/teste"));
function teste(req, res) {
    try {
        res.status(200).send(teste_1.default());
    }
    catch (error) {
        res.status(403);
    }
}
exports.default = teste;
