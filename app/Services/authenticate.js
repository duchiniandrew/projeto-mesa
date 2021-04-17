"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signInUserByEmailAndPassword_1 = __importDefault(require("../Services/signInUserByEmailAndPassword"));
const errors_1 = require("../Controllers/authentication/errors");
async function auth(req) {
    const { email, password } = req.body;
    const expirationTime = {
        expiresIn: '1h'
    };
    if (await signInUserByEmailAndPassword_1.default(email, password)) {
        return { token: jsonwebtoken_1.default.sign({ email: email }, process.env.SECRET, expirationTime) };
    }
    else {
        throw new errors_1.FailedAuthentication();
    }
}
exports.default = auth;
