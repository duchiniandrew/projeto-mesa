"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getLocalsByList_1 = __importDefault(require("../../Services/getLocalsByList"));
async function getLocalsByList(req, res) {
    res.status(200).json(await getLocalsByList_1.default());
}
exports.default = getLocalsByList;
