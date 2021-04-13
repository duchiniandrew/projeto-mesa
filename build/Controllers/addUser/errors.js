"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatPasswordError = exports.EmptyPasswordError = exports.EmptyEmailError = exports.EmptyNameError = void 0;
class EmptyNameError extends Error {
    constructor() {
        super("Name parameter empty.");
        this.code = 422;
    }
}
exports.EmptyNameError = EmptyNameError;
class EmptyEmailError extends Error {
    constructor() {
        super("Email parameter empty.");
        this.code = 422;
    }
}
exports.EmptyEmailError = EmptyEmailError;
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
