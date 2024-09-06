import user from "../Model/model.js"
import product from "../Model/product.js"

export const getdata=async(req,res)=>{
    if(user){
    const result=await product.find()
    res.status(200).send({Message:"The Complete Data are Here",
        result
    })}
    else{
        res.send({message:"No user Are Found"})
    }
    
}