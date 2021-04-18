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
            res.status(201).json(await addLocal_1.default(req));
        }
        catch (error) {
            if (error.code === '23505') {
                res.status(400).json({ message: "Email allready in use." });
            }
            else {
                res.status(500).json({ message: "Internal error in server please contact the administrator" });
            }
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = addLocal;