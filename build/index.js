"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const Routes_1 = __importDefault(require("./Routes"));
const User_1 = require("./Entities/User");
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "Mesa",
    entities: [
        User_1.User
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    typedi_1.Container.set("UserTable", connection.getRepository(User_1.User));
    Routes_1.default();
});
