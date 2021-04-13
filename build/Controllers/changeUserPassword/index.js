"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("./validation"));
const changeUserPassword_1 = __importDefault(require("../../Services/changeUserPassword"));
async function changeUserPassword(req, res) {
    try {
        await validation_1.default(req);
        try {
            res.status(200).json(await changeUserPassword_1.default(req.body.newPassword, req.body.userId));
        }
        catch (error) {
            res.status(error.code).json({ message: error.message });
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = changeUserPassword;
