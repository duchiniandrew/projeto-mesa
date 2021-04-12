"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json("Unauthorized User.");
    }
    else {
        jsonwebtoken_1.default.verify(token, process.env.SECRET, (error, user) => {
            if (error) {
                return res.status(403).send("User not authenticated");
            }
            next();
        });
    }
}
exports.default = authenticateToken;
