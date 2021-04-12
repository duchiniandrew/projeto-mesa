"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signInUserByEmailAndPassword_1 = __importDefault(require("../Services/signInUserByEmailAndPassword"));
const errors_1 = require("../Controllers/authentication/errors");
async function auth(email, password) {
    try {
        if (await signInUserByEmailAndPassword_1.default(email, password)) {
            return jsonwebtoken_1.default.sign(email, process.env.SECRET);
        }
        else {
            throw new errors_1.FailedAuthentication();
        }
    }
    catch (error) {
        throw error;
    }
}
exports.default = auth;
