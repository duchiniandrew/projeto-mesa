"use strict";
exports.__esModule = true;
var errors_1 = require("./errors");
function validation(req) {
    if (req.params.userId === "") {
        throw new errors_1.EmptyIdError();
    }
    if (isNaN(parseInt(req.params.userId))) {
        throw new errors_1.FormatIdError();
    }
}
exports["default"] = validation;
