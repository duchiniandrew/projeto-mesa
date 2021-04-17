"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
const authenticate_1 = __importDefault(require("../../Services/authenticate"));
async function authentication(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(200).json(await authenticate_1.default(req));
        }
        catch (error) {
            res.status(error.code || 500).json({ message: error.message });
        }
    }
    catch (error) {
        res.status(error.code).send({ message: error.message });
    }
}
exports.default = authentication;
