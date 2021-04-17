"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function validation(req) {
    const { email, password } = req.body;
    if (email === "") {
        throw new errors_1.EmptyEmailError();
    }
    if (password === "") {
        throw new errors_1.EmptyPasswordError();
    }
}
exports.default = validation;
