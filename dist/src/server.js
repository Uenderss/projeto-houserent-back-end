"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("./app"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var port = Number(process.env.PORT) || 5000;
app_1["default"].listen(port, function () {
    console.log("Server is up and running on port ".concat(port));
});
//# sourceMappingURL=server.js.map