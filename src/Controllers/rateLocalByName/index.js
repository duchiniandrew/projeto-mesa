"use strict";
exports.__esModule = true;
var validation_1 = require("./validation");
function rateLocalByName(req, res) {
    try {
        validation_1["default"](req);
    }
    catch (error) {
        res.status(error.code).json({ message: error.message });
    }
}
exports["default"] = rateLocalByName;
