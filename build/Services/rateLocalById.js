"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const errors_1 = require("../Controllers/rateLocalById/errors");
async function rateLocalById(rate, comment, localId) {
    const local = await typedi_1.Container.get("LocalTable").findOne({ id: localId });
    if (!local) {
        throw new errors_1.LocalNotFoundError();
    }
    else {
        await typedi_1.Container.get("LocalAnalysisTable").save({
            comments: comment,
            rating: rate,
            local: local
        });
        return "Local rating save successfuly.";
    }
}
exports.default = rateLocalById;
