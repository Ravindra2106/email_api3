"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../contoller/auth.controller");
exports.default = [
    {
        path: "/",
        method: "post",
        handler: [auth_controller_1.authController.Email]
    }
];
