"use strict";
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var typedi_1 = require("typedi");
var Routes_1 = require("../Routes");
var User_1 = require("./Entities/User");
var Local_1 = require("./Entities/Local");
var LocalAnalysis_1 = require("./Entities/LocalAnalysis");
var TokenBlackList_1 = require("./Entities/TokenBlackList");
function db() {
    typeorm_1.createConnection().then(function (connection) {
        typedi_1.Container.set("UserTable", connection.getRepository(User_1.User));
        typedi_1.Container.set("LocalTable", connection.getRepository(Local_1.Local));
        typedi_1.Container.set("LocalAnalysisTable", connection.getRepository(LocalAnalysis_1.LocalAnalysis));
        typedi_1.Container.set("TokenBlackListTable", connection.getRepository(TokenBlackList_1.TokenBlackList));
        Routes_1["default"]();
    });
}
exports["default"] = db;
