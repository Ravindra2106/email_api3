import http from 'http';
import express, { Express, NextFunction, request, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { sendEmail } from './ses';
// import { Request } from 'aws-sdk';
// import { Response } from 'aws-sdk/lib/response';
// import {AWS} from "aws-sdk";
const AWS=require('aws-sdk');
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();
const cors = require('cors');
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  //allow access from every, elminate CORS
  res.setHeader('Access-Control-Allow-Origin','*');
  res.removeHeader('x-powered-by');
  //set the allowed HTTP methods to be requested
  res.setHeader('Access-Control-Allow-Methods','POST');
  //headers clients can use in their requests
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  //allow request to continue and be handled by routes
  next();
});

// app.get('/', (req: Request, res: Response) => {
//   // console.log("heello sdksan");
//   sendEmail();
//   res.send('<h1>Hello from the TypeScript world!</h1>');
// });
app.post('/email',(req:Request,res:Response)=>
{
  sendEmail(req.body);
  console.log("request>>>",req.body);
  // res.send('the email is sent Successfully!!');
})
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));