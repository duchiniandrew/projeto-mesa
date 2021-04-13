"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const Routes_1 = __importDefault(require("../Routes"));
const User_1 = require("./Entities/User");
const Local_1 = require("./Entities/Local");
const LocalAnalysis_1 = require("./Entities/LocalAnalysis");
const TokenBlackList_1 = require("./Entities/TokenBlackList");
function db() {
    typeorm_1.createConnection().then(connection => {
        typedi_1.Container.set("UserTable", connection.getRepository(User_1.User));
        typedi_1.Container.set("LocalTable", connection.getRepository(Local_1.Local));
        typedi_1.Container.set("LocalAnalysisTable", connection.getRepository(LocalAnalysis_1.LocalAnalysis));
        typedi_1.Container.set("TokenBlackListTable", connection.getRepository(TokenBlackList_1.TokenBlackList));
        Routes_1.default();
    });
}
exports.default = db;
