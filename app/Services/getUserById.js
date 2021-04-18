"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
function getUserById(id) {
    return typedi_1.Container.get("UserTable").findOne({ id: id });
}
exports.default = getUserById;
