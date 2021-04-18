"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function getLocalRates(localId) {
    var _a;
    const localRating = await typedi_1.Container.get("LocalAnalysisTable").findOne({ id: localId });
    return {
        ...localRating,
        localName: (_a = (await typedi_1.Container.get("LocalTable").findOne({ id: localId }))) === null || _a === void 0 ? void 0 : _a.name
    };
}
exports.default = getLocalRates;
