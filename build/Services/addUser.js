"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const User_1 = require("../Entities/User");
async function addUser(name, email, password) {
    try {
        const UserTable = typedi_1.Container.get("UserTable");
        const newUser = new User_1.User(name, email, password);
        await UserTable.save(newUser);
        return "user added successfully.";
    }
    catch (error) {
        throw error;
    }
}
exports.default = addUser;
