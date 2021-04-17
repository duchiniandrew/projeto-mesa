"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdParameter = exports.EmptyIdParameter = void 0;
class EmptyIdParameter extends Error {
    constructor() {
        super('Parameter "id" is empty.');
        this.code = 422;
    }
}
exports.EmptyIdParameter = EmptyIdParameter;
class InvalidIdParameter extends Error {
    constructor() {
        super('Invalid "id" parameter.');
        this.code = 400;
    }
}
exports.InvalidIdParameter = InvalidIdParameter;
