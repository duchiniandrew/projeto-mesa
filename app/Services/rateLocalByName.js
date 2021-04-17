"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const errors_1 = require("../Controllers/rateLocalByName/errors");
async function rateLocalByName(rate, comment, localName) {
    const local = await typedi_1.Container.get("LocalTable").findOne({ name: localName });
    if (!local) {
        throw new errors_1.LocalNotFoundError();
    }
    else {
        await typedi_1.Container.get("LocalAnalysisTable").save({
            comments: comment,
            rating: rate,
            local: local
        });
        return { message: "Local rating save successfuly." };
    }
}
exports.default = rateLocalByName;
