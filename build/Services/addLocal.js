"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function addLocal(local) {
    const { name, description, lat, lng } = local;
    try {
        await typedi_1.Container.get("LocalTable").save({
            name: name,
            description: description,
            lat: lat,
            lng: lng
        });
        return "Local added successfully.";
    }
    catch (error) {
        throw error;
    }
}
exports.default = addLocal;
