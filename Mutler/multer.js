import multer from "multer"

const imageconfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./upload")//where to store the image 
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})
const checkimage=(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new  Error("Only Image are allowed"),false)
    }
}
export const upload=multer({
    storage:imageconfig,//where to store the image
    fileFilter:checkimage//check whehter the file file are image or not
})