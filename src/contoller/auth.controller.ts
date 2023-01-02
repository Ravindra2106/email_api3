import { Request, Response, NextFunction } from "express";
// import { dbClient } from "../config/db";
import { AuthService } from "../service/auth.service";
// import { ServerError } from "../utils/errorHandler";
export class authController {
  static Email: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .login(req.body)
      .then(
        (resp: any) => {
          console.log('res',resp)
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        }
        // ,
        // (err: Error) => {
        //   ServerError(err, res, next);
        // }
      )
    //   .catch((err: Error) => {
    //     ServerError(err, res, next);
    //   });
  }
}