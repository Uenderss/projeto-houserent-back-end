"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.prisma = void 0;
var client_1 = __importDefault(require("@prisma/client"));
var PrismaClient = client_1["default"].PrismaClient;
exports.prisma = new PrismaClient();
//# sourceMappingURL=database.js.map