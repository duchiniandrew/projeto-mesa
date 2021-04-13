"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const Auth_1 = __importDefault(require("../Middlewares/Auth"));
const authentication_1 = __importDefault(require("../Controllers/authentication"));
const addUser_1 = __importDefault(require("../Controllers/addUser/addUser"));
const addLocal_1 = __importDefault(require("../Controllers/addLocal"));
const rateLocalById_1 = __importDefault(require("../Controllers/rateLocalById"));
const rateLocalByName_1 = __importDefault(require("../Controllers/rateLocalByName"));
const getLocalsByList_1 = __importDefault(require("../Controllers/getLocalsByList"));
const getLocalsByMap_1 = __importDefault(require("../Controllers/getLocalsByMap"));
const getLocalRates_1 = __importDefault(require("../Controllers/getLocalRates"));
const getUserPerfil_1 = __importDefault(require("../Controllers/getUserPerfil"));
const changeUserPassword_1 = __importDefault(require("../Controllers/changeUserPassword"));
const changeUserEmail_1 = __importDefault(require("../Controllers/changeUserEmail"));
const updateUserPerfil_1 = __importDefault(require("../Controllers/updateUserPerfil"));
const app = express_1.default();
app.use(body_parser_1.json());
function routes() {
    app.get("/api/v1/getLocalsByList", Auth_1.default, getLocalsByList_1.default);
    app.get("/api/v1/getLocalsByMap/:lat/:lng", Auth_1.default, getLocalsByMap_1.default);
    app.get("/api/v1/getLocalRates/:id", Auth_1.default, getLocalRates_1.default);
    app.get("/api/v1/getUserPerfil", Auth_1.default, getUserPerfil_1.default);
    app.post("/api/v1/addLocal", Auth_1.default, addLocal_1.default);
    app.post("/api/v1/user", Auth_1.default, addUser_1.default);
    app.post("/api/v1/authenticate", authentication_1.default);
    app.post("/api/v1/rateLocalById", Auth_1.default, rateLocalById_1.default);
    app.post("/api/v1/rateLocalByName", Auth_1.default, rateLocalByName_1.default);
    app.patch("/api/v1/changeUserPassword", Auth_1.default, changeUserPassword_1.default);
    app.patch("/api/v1/changeUserEmail", Auth_1.default, changeUserEmail_1.default);
    app.put("/api/v1/updateUserPerfil", Auth_1.default, updateUserPerfil_1.default);
    app.listen(process.env.PORT || 3001);
}
exports.default = routes;
