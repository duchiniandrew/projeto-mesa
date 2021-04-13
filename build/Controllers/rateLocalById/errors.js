"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalNotFoundError = exports.EmptyIdParameterError = exports.EmptyCommentParameterError = exports.EmptyRateParameterError = void 0;
class EmptyRateParameterError extends Error {
    constructor() {
        super('Parameter "rate" is empty.');
        this.code = 422;
    }
}
exports.EmptyRateParameterError = EmptyRateParameterError;
class EmptyCommentParameterError extends Error {
    constructor() {
        super('Parameter "comment" is empty.');
        this.code = 422;
    }
}
exports.EmptyCommentParameterError = EmptyCommentParameterError;
class EmptyIdParameterError extends Error {
    constructor() {
        super('Parameter "id" is empty.');
        this.code = 422;
    }
}
exports.EmptyIdParameterError = EmptyIdParameterError;
class LocalNotFoundError extends Error {
    constructor() {
        super('Local not found.');
        this.code = 400;
    }
}
exports.LocalNotFoundError = LocalNotFoundError;
