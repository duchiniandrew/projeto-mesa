"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAllreadyExists = exports.EmptyLngError = exports.EmptyLatError = exports.EmptyDescriptionError = exports.EmptyNameError = void 0;
class EmptyNameError extends Error {
    constructor() {
        super("Name parameter empty.");
        this.code = 422;
    }
}
exports.EmptyNameError = EmptyNameError;
class EmptyDescriptionError extends Error {
    constructor() {
        super("Description parameter empty.");
        this.code = 422;
    }
}
exports.EmptyDescriptionError = EmptyDescriptionError;
class EmptyLatError extends Error {
    constructor() {
        super("Lat parameter empty.");
        this.code = 422;
    }
}
exports.EmptyLatError = EmptyLatError;
class EmptyLngError extends Error {
    constructor() {
        super("Lng parameter empty.");
        this.code = 422;
    }
}
exports.EmptyLngError = EmptyLngError;
class LocalAllreadyExists extends Error {
    constructor() {
        super("Local allready Exists.");
        this.code = 400;
    }
}
exports.LocalAllreadyExists = LocalAllreadyExists;
