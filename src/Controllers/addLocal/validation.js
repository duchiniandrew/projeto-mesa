"use strict";
exports.__esModule = true;
var errors_1 = require("./errors");
function validation(req) {
    if (req.body.name === "") {
        throw new errors_1.EmptyNameError();
    }
    if (req.body.description === "") {
        throw new errors_1.EmptyDescriptionError();
    }
    if (!req.body.lat) {
        throw new errors_1.EmptyLatError();
    }
    if (!req.body.lng) {
        throw new errors_1.EmptyLngError();
    }
}
exports["default"] = validation;
