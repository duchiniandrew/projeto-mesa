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
const getLocalsByMap_1 = __importDefault(require("../Controllers/getLocalsByMap"));
const teste_1 = __importDefault(require("../Controllers/teste"));
const app = express_1.default();
app.use(body_parser_1.json());
function routes() {
    app.get("/teste", Auth_1.default, teste_1.default);
    app.post("/addLocal", Auth_1.default, addLocal_1.default);
    app.get("/getLocalsByMap", Auth_1.default, getLocalsByMap_1.default);
    app.post("/user", Auth_1.default, addUser_1.default);
    app.post("/authenticate", authentication_1.default);
    app.listen(process.env["PORT"] || 3001);
}
exports.default = routes;
