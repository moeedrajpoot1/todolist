const express=require("express")
const router=express.Router()
const { userCreate}=require('../controllers/userController')


router.post("/create",userCreate)




module.exports=router