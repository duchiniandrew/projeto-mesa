"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
async function validation(req) {
    const { name, email, password } = req.body;
    if (name === "") {
        throw new errors_1.EmptyNameError();
    }
    if (email === "") {
        throw new errors_1.EmptyEmailError();
    }
    if (password === "") {
        throw new errors_1.EmptyPasswordError();
    }
    if (password.length < 8 && /^[0-9a-zA-Z]+$/.test(password)) {
        throw new errors_1.FormatPasswordError();
    }
}
exports.default = validation;
