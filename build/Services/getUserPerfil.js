"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function getUserPerfil(userId) {
    return typedi_1.Container.get("UserTable").findOne({ id: userId });
}
exports.default = getUserPerfil;
