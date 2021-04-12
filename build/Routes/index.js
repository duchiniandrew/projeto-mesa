"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const addUser_1 = __importDefault(require("../Controllers/addUser/addUser"));
const teste_1 = __importDefault(require("../Controllers/teste"));
const app = express_1.default();
app.use(body_parser_1.json());
function routes() {
    app.get("/teste", teste_1.default);
    app.post("/user", addUser_1.default);
    app.listen(process.env["PORT"] || 3000);
}
exports.default = routes;
