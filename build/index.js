"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/index"));
const configs_1 = require("./configs");
const app = (0, express_1.default)();
const port = configs_1.Configs.port; // default port to listen
app.use("/", index_1.default);
app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map