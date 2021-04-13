"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function validation(req) {
    if (req.body.rating === "") {
        throw new errors_1.EmptyRateParameterError();
    }
    if (req.body.comment === "") {
        throw new errors_1.EmptyCommentParameterError();
    }
}
exports.default = validation;
