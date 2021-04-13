"use strict";
exports.__esModule = true;
var typedi_1 = require("typedi");
function getLocalRates(localId) {
    return typedi_1.Container.get("LocalTable").findOne({ id: localId });
}
exports["default"] = getLocalRates;
