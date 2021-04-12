"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const User_1 = require("../DB/Entities/User");
async function addUser(name, email, password) {
    try {
        const newUser = new User_1.User(name, email, password);
        await typedi_1.Container.get("UserTable").save(newUser);
        return "User added successfully.";
    }
    catch (error) {
        throw error;
    }
}
exports.default = addUser;
