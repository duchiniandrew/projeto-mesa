"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatIdError = exports.EmptyIdError = void 0;
class EmptyIdError extends Error {
    constructor() {
        super("Id parameter empty.");
        this.code = 422;
    }
}
exports.EmptyIdError = EmptyIdError;
class FormatIdError extends Error {
    constructor() {
        super("Id parameter must be a integer number.");
        this.code = 400;
    }
}
exports.FormatIdError = FormatIdError;
