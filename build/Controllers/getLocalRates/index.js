"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getLocalRates_1 = __importDefault(require("../../Services/getLocalRates"));
const validation_1 = __importDefault(require("./validation"));
async function getLocalRate(req, res) {
    try {
        validation_1.default(req);
        try {
            res.status(200).json(await getLocalRates_1.default(parseInt(req.params.localId)));
        }
        catch (error) {
            res.status(error.code).json({ message: error.message });
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports.default = getLocalRate;
