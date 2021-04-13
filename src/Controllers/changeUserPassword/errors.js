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
exports.SamePasswordError = exports.FormatPasswordError = exports.EmptyPasswordError = void 0;
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
var FormatPasswordError = /** @class */ (function (_super) {
    __extends(FormatPasswordError, _super);
    function FormatPasswordError() {
        var _this = _super.call(this, "Password must have at least 8 characters and include numbers and letters.") || this;
        _this.code = 400;
        return _this;
    }
    return FormatPasswordError;
}(Error));
exports.FormatPasswordError = FormatPasswordError;
var SamePasswordError = /** @class */ (function (_super) {
    __extends(SamePasswordError, _super);
    function SamePasswordError() {
        var _this = _super.call(this, "Password cannot be the same.") || this;
        _this.code = 400;
        return _this;
    }
    return SamePasswordError;
}(Error));
exports.SamePasswordError = SamePasswordError;
