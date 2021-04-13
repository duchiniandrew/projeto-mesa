"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAllreadyLoggedError = exports.FailedAuthentication = exports.EmptyPasswordError = exports.EmptyEmailError = void 0;
class EmptyEmailError extends Error {
    constructor() {
        super("Email parameter is empty.");
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
class FailedAuthentication extends Error {
    constructor() {
        super("Email or password invalid.");
        this.code = 401;
    }
}
exports.FailedAuthentication = FailedAuthentication;
class UserAllreadyLoggedError extends Error {
    constructor() {
        super("User allready logged.");
        this.code = 400;
    }
}
exports.UserAllreadyLoggedError = UserAllreadyLoggedError;
