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
exports.LocalNotFoundError = exports.EmptyIdParameterError = exports.EmptyCommentParameterError = exports.EmptyRateParameterError = void 0;
var EmptyRateParameterError = /** @class */ (function (_super) {
    __extends(EmptyRateParameterError, _super);
    function EmptyRateParameterError() {
        var _this = _super.call(this, 'Parameter "rate" is empty.') || this;
        _this.code = 422;
        return _this;
    }
    return EmptyRateParameterError;
}(Error));
exports.EmptyRateParameterError = EmptyRateParameterError;
var EmptyCommentParameterError = /** @class */ (function (_super) {
    __extends(EmptyCommentParameterError, _super);
    function EmptyCommentParameterError() {
        var _this = _super.call(this, 'Parameter "comment" is empty.') || this;
        _this.code = 422;
        return _this;
    }
    return EmptyCommentParameterError;
}(Error));
exports.EmptyCommentParameterError = EmptyCommentParameterError;
var EmptyIdParameterError = /** @class */ (function (_super) {
    __extends(EmptyIdParameterError, _super);
    function EmptyIdParameterError() {
        var _this = _super.call(this, 'Parameter "id" is empty.') || this;
        _this.code = 422;
        return _this;
    }
    return EmptyIdParameterError;
}(Error));
exports.EmptyIdParameterError = EmptyIdParameterError;
var LocalNotFoundError = /** @class */ (function (_super) {
    __extends(LocalNotFoundError, _super);
    function LocalNotFoundError() {
        var _this = _super.call(this, 'Local not found.') || this;
        _this.code = 400;
        return _this;
    }
    return LocalNotFoundError;
}(Error));
exports.LocalNotFoundError = LocalNotFoundError;
