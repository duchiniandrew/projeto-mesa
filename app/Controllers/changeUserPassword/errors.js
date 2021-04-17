"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamePasswordError = exports.FormatPasswordError = exports.EmptyPasswordError = void 0;
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
