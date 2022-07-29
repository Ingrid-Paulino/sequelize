"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('express-async-errors');
const errorHandlerMiddleware_1 = __importDefault(require("./middlewares/errorHandlerMiddleware"));
const routes_1 = __importDefault(require("../app/routes"));
// const registerController = require('../app/controllers/registationController')
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use(routes_1.default);
api.use(errorHandlerMiddleware_1.default);
api.listen("3008", () => {
    console.log(`running on port 3008`);
});
exports.default = api;
