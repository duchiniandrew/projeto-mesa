"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamePasswordError = exports.FormatPasswordError = exports.EmptyPasswordError = exports.SameEmailError = exports.FormatEmailError = exports.EmptyEmailError = void 0;
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
class EmptyPasswordError extends Error {
    constructor() {
        super("Password parameter empty.");
        this.code = 422;
    }
}
exports.EmptyPasswordError = EmptyPasswordError;
class FormatPasswordError extends Error {
    constructor() {
        super("Password must have at least 8 characters and include numbers and letters.");
        this.code = 400;
    }
}
exports.FormatPasswordError = FormatPasswordError;
class SamePasswordError extends Error {
    constructor() {
        super("Password cannot be the same.");
        this.code = 400;
    }
}
exports.SamePasswordError = SamePasswordError;
