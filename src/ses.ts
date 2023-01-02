// import { nanoid } from "nanoid";
// import {AWS} from "aws-sdk";
// import { env } from "process";
import{Request, Response} from 'express'
// Request, Response
const AWS = require("aws-sdk");
const env = require("dotenv");
// const getParamsFromUrl = require('./getParamsFromUrl')
env.config();
const awsConfig={
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region:process.env.AWS_REGION,
}
// console.log(">>>>>>>>>>>>>>>>>>",process.env);
// console.log("hlo rrrr",awsConfig);
const SES =new AWS.SES(awsConfig);
// console.log("SES>>>>",SES)
const sendEmail = async (body:any) => {
    // console.log("helooakjjsdafkjasdjksdjksdaf>>>>>>>>");
    const email = process.env.from_email
    // console.log("emailllll",email);
    // const shortcode = nanoid(7).toUpperCase()
    console.log("from_email>>>>",email);
    try {
        const params={
            Source:email,
            Destination:{
                ToAddresses:[body.email1]
                // ToAddresses:[process.env.email3]
            },
            Message:{
                Subject:{
                    Charset:"UTF-8",
                    Data:`OTP verifiction`
                },
                Body:{
                    Html:{
                        Charset:"UTF-8",
                        Data:body.comment1
                        // Data:process.env.comment2
                    },
                },
            },
        };
        const emailSent=  SES.sendEmail(params).promise();
        emailSent.then((data:any)=>
            {
                console.log("Email sent successfully",data);
                // data.send('the email is sent Successfully!!');
            //    const emailResponse=()=>
            //    {

            //    }
            })
            .catch((err: any)=>
                {
                    console.log(err);
                });
    }
    catch (error) {
        console.log(error);
    }
    
    
};
// const emailResponse =()=>
//     {
//      send("the email is sent Successfully!!");
//     }

console.log("sendEMail>>>>",sendEmail);
// module.exports=sendEmail;
// export {AWS}
export {sendEmail};
    
