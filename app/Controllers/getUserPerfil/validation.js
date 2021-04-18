"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function validation(req) {
    if (req.params.id === "") {
        throw new errors_1.EmptyIdError();
    }
    if (isNaN(parseInt(req.params.id))) {
        throw new errors_1.FormatIdError();
    }
}
exports.default = validation;
