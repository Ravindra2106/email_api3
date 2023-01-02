// import { dbClient } from "../config/db";

export class AuthModel {
  static login(body: any) {
    return new Promise(async function (resolve, reject) {
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
  }
}
  