import express from "express"
import dotenv from "dotenv"
import { database } from "./Database/database.js";
import router from "./Router/router.js";
import cors from "cors"

dotenv.config()// read the file 

const app=express();
app.use(express.json());
app.use(cors())
app.use(router)
app.use("/upload",express.static("./upload"))
database()

 const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`The Port are running at ${port}`)
})