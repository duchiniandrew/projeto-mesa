"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addUser_1 = __importDefault(require("../../Services/addUser"));
const validation_1 = __importDefault(require("./validation"));
async function addUser(req, res) {
    // try {
    try {
        await validation_1.default(req);
        try {
            res.status(200).json(await addUser_1.default(req.body.name, req.body.email, req.body.password));
        }
        catch (error) {
            res.status(500).json("Internal error in server please contact the administrator");
        }
    }
    catch (error) {
        res.status(error.code).json(error.message);
    }
    // }
    // catch (error) {
    //     res.status(403).send("User not Authenticated.")
    // }
}
exports.default = addUser;
