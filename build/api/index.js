"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileRouter_1 = __importDefault(require("./routes/fileRouter"));
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, fileRouter_1.default)(app);
    return app;
};
//# sourceMappingURL=index.js.map