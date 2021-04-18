"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const typedi_1 = require("typedi");
async function validation(req) {
    if (req.body.newPassword === "") {
        throw new errors_1.EmptyPasswordError();
    }
    if (req.body.newPassword.length < 8 && /^[0-9a-zA-Z]+$/.test(req.body.newPassword)) {
        throw new errors_1.FormatPasswordError();
    }
    if (await typedi_1.Container.get("UserTable").findOne({ id: req.body.userId, password: req.body.newPassword })) {
        throw new errors_1.SamePasswordError();
    }
}
exports.default = validation;
