"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logout_1 = __importDefault(require("../../Services/logout"));
async function logout(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
        await logout_1.default(token);
        res.status(200).json({ message: "Logout successfully" });
    }
}
exports.default = logout;
