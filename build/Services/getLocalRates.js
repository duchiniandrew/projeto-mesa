"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
function getLocalRates(localId) {
    return typedi_1.Container.get("LocalTable").findOne({ id: localId });
}
exports.default = getLocalRates;
