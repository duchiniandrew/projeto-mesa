"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
const getUserPerfil_1 = __importDefault(require("../../Services/getUserPerfil"));
async function getUserPerfil(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(200).json(await getUserPerfil_1.default(parseInt(req.params.userId)));
        }
        catch (error) {
            res.status(error.code).json({ message: error.message });
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = getUserPerfil;
