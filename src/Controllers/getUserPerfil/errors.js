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
exports.FormatIdError = exports.EmptyIdError = void 0;
var EmptyIdError = /** @class */ (function (_super) {
    __extends(EmptyIdError, _super);
    function EmptyIdError() {
        var _this = _super.call(this, "Id parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyIdError;
}(Error));
exports.EmptyIdError = EmptyIdError;
var FormatIdError = /** @class */ (function (_super) {
    __extends(FormatIdError, _super);
    function FormatIdError() {
        var _this = _super.call(this, "Id parameter must be a integer number.") || this;
        _this.code = 400;
        return _this;
    }
    return FormatIdError;
}(Error));
exports.FormatIdError = FormatIdError;
