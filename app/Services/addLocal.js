"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const errors_1 = require("../Controllers/addLocal/errors");
async function addLocal(req) {
    const { name, description, lat, lng } = req.body;
    try {
        if (await typedi_1.Container.get("LocalTable").findOne({ name: name })) {
            throw new errors_1.LocalAllreadyExists();
        }
        await typedi_1.Container.get("LocalTable").save({
            name: name,
            description: description,
            lat: lat,
            lng: lng
        });
        return { message: "Local added successfully." };
    }
    catch (error) {
        throw error;
    }
}
exports.default = addLocal;
