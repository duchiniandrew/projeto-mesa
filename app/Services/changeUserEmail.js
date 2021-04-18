"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
async function changeUserPasswordService(newEmail, userId) {
    await typedi_1.Container.get("UserTable").save({ id: userId, email: newEmail });
    return { message: "User email successfully updated." };
}
exports.default = changeUserPasswordService;
