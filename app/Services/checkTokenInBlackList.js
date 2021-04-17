"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function checkTokenInBlackList(token) {
    return typedi_1.Container.get("TokenBlackListTable").findOne({ token: token });
}
exports.default = checkTokenInBlackList;
