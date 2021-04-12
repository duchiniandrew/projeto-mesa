"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
const authenticate_1 = __importDefault(require("../../Services/authenticate"));
function authentication(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(200).json(authenticate_1.default(req.body.email, req.body.password));
        }
        catch (error) {
            res.status(error.code || 500).json(error.message);
        }
    }
    catch (error) {
        res.status(error.code).send(error.message);
    }
}
exports.default = authentication;
