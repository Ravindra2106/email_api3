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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
// import { nanoid } from "nanoid";
// import {AWS} from "aws-sdk";
// import { env } from "process";
const AWS = require("aws-sdk");
const env = require("dotenv");
// const getParamsFromUrl = require('./getParamsFromUrl')
env.config();
const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
};
// console.log(">>>>>>>>>>>>>>>>>>",process.env);
// console.log("hlo rrrr",awsConfig);
const SES = new AWS.SES(awsConfig);
// console.log("SES>>>>",SES)
const sendEmail = (body) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("helooakjjsdafkjasdjksdjksdaf>>>>>>>>");
    const email = process.env.from_email;
    // console.log("emailllll",email);
    // const shortcode = nanoid(7).toUpperCase()
    console.log("from_email>>>>", email);
    try {
        const params = {
            Source: email,
            Destination: {
                ToAddresses: [body.email1]
                // ToAddresses:[process.env.email3]
            },
            Message: {
                Subject: {
                    Charset: "UTF-8",
                    Data: `OTP verifiction`
                },
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: body.comment1
                        // Data:process.env.comment2
                    },
                },
            },
        };
        const emailSent = SES.sendEmail(params).promise();
        emailSent.then((data) => {
            console.log("Email sent successfully", data);
            // data.send('the email is sent Successfully!!');
        })
            .catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendEmail = sendEmail;
console.log("sendEMail>>>>", sendEmail);
