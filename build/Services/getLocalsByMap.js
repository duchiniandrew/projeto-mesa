"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
function getLocals() {
    return typedi_1.Container.get("LocalTable").find({});
}
exports.default = getLocals;
