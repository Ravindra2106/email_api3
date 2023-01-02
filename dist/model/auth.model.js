"use strict";
// import { dbClient } from "../config/db";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
class AuthModel {
    static login(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                //   dbClient.query(
                //     {
                //       sql: 'CALL `powerwellness`.`login`(?, ?);',
                //       values: [body.user_namee, body.passletter],
                //     },
                //     function (err: Error, res: any) {
                //       if (err) {
                //         // console.log('err',err);
                //         resolve(err)
                //           ;
                //       } else {
                //         console.log('response', res);
                //         resolve(res);
                //       }
                //     }
                //   );
            });
        });
    }
}
exports.AuthModel = AuthModel;
