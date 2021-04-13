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
exports.SameEmailError = exports.FormatEmailError = exports.EmptyEmailError = void 0;
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
var FormatEmailError = /** @class */ (function (_super) {
    __extends(FormatEmailError, _super);
    function FormatEmailError() {
        var _this = _super.call(this, "Email must follow pattern like: email@email.com.") || this;
        _this.code = 400;
        return _this;
    }
    return FormatEmailError;
}(Error));
exports.FormatEmailError = FormatEmailError;
var SameEmailError = /** @class */ (function (_super) {
    __extends(SameEmailError, _super);
    function SameEmailError() {
        var _this = _super.call(this, "Email cannot be the same.") || this;
        _this.code = 400;
        return _this;
    }
    return SameEmailError;
}(Error));
exports.SameEmailError = SameEmailError;
