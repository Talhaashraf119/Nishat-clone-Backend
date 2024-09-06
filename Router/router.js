import express from "express"
import { register } from "../Controller/register.js"
import { login, testedroute } from "../Controller/login.js"
import { deleteuser } from "../Controller/deleteuser.js"
import { update } from "../Controller/update.js"
import { getdatabyid } from "../Controller/getdatabyid.js"
import { getdata } from "../Controller/getdata.js"
import { upload } from "../Mutler/multer.js"
import { verifytoken } from "../Verifytoken/verifytoken.js"
import { optpsend } from "../Controller/optpsend.js"
import { resetpass } from "../Controller/resetpass.js"
import { addproduct } from "../Controller/addproduct.js"
import { updateproduct } from "../Controller/updateproduct.js"
import payment from "../Controller/payment.js"
import { email } from "../Controller/email.js"

const router=express.Router()

router.post('/register',upload.single("photo"),register)
router.post('/login',login)
router.delete('/delete/:id',deleteuser)
router.put('/update/:id',upload.single("photo"),update)
router.get('/getdata/:id',getdatabyid)
router.get('/getdata',getdata)
router.post('/getemail',optpsend)
router.put('/resetpass',resetpass)
router.put('/updateproduct/:id',upload.single("photo"),updateproduct)
router.post('/addproduct',upload.single("photo"),addproduct)
router.get('/protected',verifytoken,testedroute)
router.post('/checkout',payment)
router.post('/email',email)

export default router