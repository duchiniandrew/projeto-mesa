"use strict";
exports.__esModule = true;
var errors_1 = require("./errors");
function validation(req) {
    if (req.params.id === "") {
        throw new errors_1.EmptyIdParameter();
    }
    if (isNaN(parseInt(req.params.id))) {
        throw new errors_1.InvalidIdParameter();
    }
}
exports["default"] = validation;
