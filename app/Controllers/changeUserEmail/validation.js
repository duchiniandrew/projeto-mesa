"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const typedi_1 = require("typedi");
async function validation(req) {
    if (req.body.newEmail === "") {
        throw new errors_1.EmptyEmailError();
    }
    //TODO check if email is like email@email.com
    // if (req.body.newEmail.length < 8 && /^[0-9a-zA-Z]+$/.test(req.body.newPassword)) {
    //     throw new FormatEmailError()
    // }
    if (await typedi_1.Container.get("UserTable").findOne({ id: req.body.userId, email: req.body.newEmail })) {
        throw new errors_1.SameEmailError();
    }
}
exports.default = validation;
