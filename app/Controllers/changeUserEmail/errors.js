"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SameEmailError = exports.FormatEmailError = exports.EmptyEmailError = void 0;
class EmptyEmailError extends Error {
    constructor() {
        super("Email parameter is empty.");
        this.code = 422;
    }
}
exports.EmptyEmailError = EmptyEmailError;
class FormatEmailError extends Error {
    constructor() {
        super("Email must follow pattern like: email@email.com.");
        this.code = 400;
    }
}
exports.FormatEmailError = FormatEmailError;
class SameEmailError extends Error {
    constructor() {
        super("Email cannot be the same.");
        this.code = 400;
    }
}
exports.SameEmailError = SameEmailError;
