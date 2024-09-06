import nodemailer from "nodemailer"
import user from "../Model/model.js"


export const optpsend=async(req,res)=>{
    const {email,otp}=req.body
    const checkemail=await user.findOne({email})
    if(!checkemail){
        return res.status(404).send({message:"Kindly Enter the Registered Email "})

    }

    const trasporter=nodemailer.createTransport({
         service:"gmail",
         auth:{
            user:process.env.USER,
            pass:process.env.PASS
         }
    })

    const option={
        from:process.env.USER,
        to:email,
        subject:"The Optp Verification",
        html:`the Optp are ${otp}`
    }

    trasporter.sendMail(option,(error,info)=>{
        if(error){
            res.send({Message:"The Optp are not Sent "},(error))
        }else{
            return res.status(200).send({ message: "OTP sent successfully", info: info.response });

        }
    })





}