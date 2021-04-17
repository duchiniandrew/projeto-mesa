"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function logout(token) {
    return typedi_1.Container.get("TokenBlackListTable").save({ token: token });
}
exports.default = logout;
