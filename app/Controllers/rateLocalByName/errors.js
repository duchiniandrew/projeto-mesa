"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalNotFoundError = exports.EmptyLocalNameParameterError = exports.EmptyCommentParameterError = exports.EmptyRateParameterError = void 0;
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
class EmptyLocalNameParameterError extends Error {
    constructor() {
        super('Parameter "localName" is empty.');
        this.code = 422;
    }
}
exports.EmptyLocalNameParameterError = EmptyLocalNameParameterError;
class LocalNotFoundError extends Error {
    constructor() {
        super('Local not found.');
        this.code = 400;
    }
}
exports.LocalNotFoundError = LocalNotFoundError;