"use strict";
exports.__esModule = true;
var errors_1 = require("./errors");
function validation(req) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email === "") {
        throw new errors_1.EmptyEmailError();
    }
    if (password === "") {
        throw new errors_1.EmptyPasswordError();
    }
}
exports["default"] = validation;
