import { authController }  from "../contoller/auth.controller";
export default [
    {
        path: "/",
        method: "post",
        handler: [authController.Email]
    }
]