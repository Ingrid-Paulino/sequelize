"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, _req, res, _next) => {
    if (err)
        return res.status(err.status).json({ error: err.message });
    return res.status(500).json({ error: { message: "err.message" } });
};
exports.default = errorHandlerMiddleware;
