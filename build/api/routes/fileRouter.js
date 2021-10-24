"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/file", router);
    router.get("/upload", (req, res, next) => {
        res.status(400).send("ok");
        return;
    });
};
//# sourceMappingURL=fileRouter.js.map