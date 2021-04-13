"use strict";
exports.__esModule = true;
var typedi_1 = require("typedi");
function signInUserByEmailAndPassword(email, password) {
    return typedi_1.Container.get("UserTable").findOne({ email: email, password: password });
}
exports["default"] = signInUserByEmailAndPassword;
