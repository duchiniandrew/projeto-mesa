"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const Auth_1 = __importDefault(require("../Middlewares/Auth"));
const authentication_1 = __importDefault(require("../Controllers/authentication"));
const addUser_1 = __importDefault(require("../Controllers/addUser"));
const addLocal_1 = __importDefault(require("../Controllers/addLocal"));
const rateLocalById_1 = __importDefault(require("../Controllers/rateLocalById"));
const rateLocalByName_1 = __importDefault(require("../Controllers/rateLocalByName"));
const getLocalsByList_1 = __importDefault(require("../Controllers/getLocalsByList"));
const getLocalsByMap_1 = __importDefault(require("../Controllers/getLocalsByMap"));
const getLocalRates_1 = __importDefault(require("../Controllers/getLocalRates"));
const getUserPerfil_1 = __importDefault(require("../Controllers/getUserPerfil"));
const changeUserPassword_1 = __importDefault(require("../Controllers/changeUserPassword"));
const changeUserEmail_1 = __importDefault(require("../Controllers/changeUserEmail"));
const logout_1 = __importDefault(require("../Controllers/logout"));
const updateUserPerfil_1 = __importDefault(require("../Controllers/updateUserPerfil"));
const swagger_ui_express_1 = require("swagger-ui-express");
const swaggerFile = __importStar(require("../api-spec.json"));
const app = express_1.default();
app.use(body_parser_1.json());
function routes() {
    app.use('/api/docs', swagger_ui_express_1.serve, swagger_ui_express_1.setup(swaggerFile));
    app.get("/api/v1/getLocalsByList", Auth_1.default, getLocalsByList_1.default);
    app.get("/api/v1/getLocalsByMap/:lat/:lng", Auth_1.default, getLocalsByMap_1.default);
    app.get("/api/v1/getLocalRates/:id", Auth_1.default, getLocalRates_1.default);
    app.get("/api/v1/getUserPerfil/:id", Auth_1.default, getUserPerfil_1.default);
    app.get("/api/v1/logout", Auth_1.default, logout_1.default);
    app.post("/api/v1/addLocal", Auth_1.default, addLocal_1.default);
    app.post("/api/v1/user", addUser_1.default);
    app.post("/api/v1/authenticate", authentication_1.default);
    app.post("/api/v1/rateLocalById", Auth_1.default, rateLocalById_1.default);
    app.post("/api/v1/rateLocalByName", Auth_1.default, rateLocalByName_1.default);
    app.patch("/api/v1/changeUserPassword", Auth_1.default, changeUserPassword_1.default);
    app.patch("/api/v1/changeUserEmail", Auth_1.default, changeUserEmail_1.default);
    app.put("/api/v1/updateUserPerfil", Auth_1.default, updateUserPerfil_1.default);
    app.listen(process.env.PORT || 3001);
}
exports.default = routes;
