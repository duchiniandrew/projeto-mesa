"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UserAllreadyLoggedError = exports.FailedAuthentication = exports.EmptyPasswordError = exports.EmptyEmailError = void 0;
var EmptyEmailError = /** @class */ (function (_super) {
    __extends(EmptyEmailError, _super);
    function EmptyEmailError() {
        var _this = _super.call(this, "Email parameter is empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyEmailError;
}(Error));
exports.EmptyEmailError = EmptyEmailError;
var EmptyPasswordError = /** @class */ (function (_super) {
    __extends(EmptyPasswordError, _super);
    function EmptyPasswordError() {
        var _this = _super.call(this, "Password parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyPasswordError;
}(Error));
exports.EmptyPasswordError = EmptyPasswordError;
var FailedAuthentication = /** @class */ (function (_super) {
    __extends(FailedAuthentication, _super);
    function FailedAuthentication() {
        var _this = _super.call(this, "Email or password invalid.") || this;
        _this.code = 401;
        return _this;
    }
    return FailedAuthentication;
}(Error));
exports.FailedAuthentication = FailedAuthentication;
var UserAllreadyLoggedError = /** @class */ (function (_super) {
    __extends(UserAllreadyLoggedError, _super);
    function UserAllreadyLoggedError() {
        var _this = _super.call(this, "User allready logged.") || this;
        _this.code = 400;
        return _this;
    }
    return UserAllreadyLoggedError;
}(Error));
exports.UserAllreadyLoggedError = UserAllreadyLoggedError;
