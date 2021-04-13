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
exports.InvalidIdParameter = exports.EmptyIdParameter = void 0;
var EmptyIdParameter = /** @class */ (function (_super) {
    __extends(EmptyIdParameter, _super);
    function EmptyIdParameter() {
        var _this = _super.call(this, 'Parameter "id" is empty.') || this;
        _this.code = 422;
        return _this;
    }
    return EmptyIdParameter;
}(Error));
exports.EmptyIdParameter = EmptyIdParameter;
var InvalidIdParameter = /** @class */ (function (_super) {
    __extends(InvalidIdParameter, _super);
    function InvalidIdParameter() {
        var _this = _super.call(this, 'Invalid "id" parameter.') || this;
        _this.code = 400;
        return _this;
    }
    return InvalidIdParameter;
}(Error));
exports.InvalidIdParameter = InvalidIdParameter;
