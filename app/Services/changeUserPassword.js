"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function changeUserPasswordService(newPassword, userId) {
    await typedi_1.Container.get("UserTable").save({ id: userId, password: newPassword });
    return { message: "User password successfully updated." };
}
exports.default = changeUserPasswordService;
