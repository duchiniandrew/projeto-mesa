"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function getLocals() {
    const locals = await typedi_1.Container.get("LocalTable").find({});
    locals.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        else if (a.name < b.name) {
            return -1;
        }
        else {
            return 0;
        }
    });
    return locals;
}
exports.default = getLocals;
