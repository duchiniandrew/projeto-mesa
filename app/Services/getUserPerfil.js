"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function getUserPerfil(userId) {
    return typedi_1.Container.get("UserTable").createQueryBuilder("user").select(['user.email', 'user.name']).getOne();
}
exports.default = getUserPerfil;
