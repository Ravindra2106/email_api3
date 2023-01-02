"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const ses_1 = require("./ses");
// import { Request } from 'aws-sdk';
// import { Response } from 'aws-sdk/lib/response';
// import {AWS} from "aws-sdk";
const AWS = require('aws-sdk');
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //allow request to continue and be handled by routes
    next();
});
// app.get('/', (req: Request, res: Response) => {
//   // console.log("heello sdksan");
//   sendEmail();
//   res.send('<h1>Hello from the TypeScript world!</h1>');
// });
app.post('/email', (req, res) => {
    (0, ses_1.sendEmail)(req.body);
    console.log("request>>>", req.body);
    // res.send('the email is sent Successfully!!');
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
