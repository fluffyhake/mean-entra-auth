"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
// Home page route.
authRouter.get("/login", (req, res) => {
    res.send({ "Status": "Loggin in " }).json;
});
// About page route.
authRouter.get("/logout", (req, res) => {
    res.send({ "Status": "Loggin out" }).json;
});
module.exports = authRouter;
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map