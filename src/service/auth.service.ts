import { AuthModel } from "../model/auth.model"


export class AuthService {

    login(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.login(body).then((res: any) => {
                 console.log('res>>>',res);
                // if (body.email === res.user_namee && body.password === res.passletter) {
                resolve(res);
                // }
                // else{
                //     console.log('here')
                // }
            });
        });
    }
}