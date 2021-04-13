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
exports.EmptyLngError = exports.EmptyLatError = exports.EmptyDescriptionError = exports.EmptyNameError = void 0;
var EmptyNameError = /** @class */ (function (_super) {
    __extends(EmptyNameError, _super);
    function EmptyNameError() {
        var _this = _super.call(this, "Name parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyNameError;
}(Error));
exports.EmptyNameError = EmptyNameError;
var EmptyDescriptionError = /** @class */ (function (_super) {
    __extends(EmptyDescriptionError, _super);
    function EmptyDescriptionError() {
        var _this = _super.call(this, "Description parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyDescriptionError;
}(Error));
exports.EmptyDescriptionError = EmptyDescriptionError;
var EmptyLatError = /** @class */ (function (_super) {
    __extends(EmptyLatError, _super);
    function EmptyLatError() {
        var _this = _super.call(this, "Lat parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyLatError;
}(Error));
exports.EmptyLatError = EmptyLatError;
var EmptyLngError = /** @class */ (function (_super) {
    __extends(EmptyLngError, _super);
    function EmptyLngError() {
        var _this = _super.call(this, "Lng parameter empty.") || this;
        _this.code = 422;
        return _this;
    }
    return EmptyLngError;
}(Error));
exports.EmptyLngError = EmptyLngError;
