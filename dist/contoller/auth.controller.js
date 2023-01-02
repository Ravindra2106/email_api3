"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
// import { dbClient } from "../config/db";
const auth_service_1 = require("../service/auth.service");
// import { ServerError } from "../utils/errorHandler";
class authController {
}
exports.authController = authController;
_a = authController;
authController.Email = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .login(req.body)
        .then((resp) => {
        console.log('res', resp);
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }
    // ,
    // (err: Error) => {
    //   ServerError(err, res, next);
    // }
    );
    //   .catch((err: Error) => {
    //     ServerError(err, res, next);
    //   });
});
