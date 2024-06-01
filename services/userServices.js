const userModel=require("../models/userModels")
const {v4:uuid}=require("uuid")
const {hash}=require("bcryptjs")
module.exports={
    userCreate:async(body)=>{
        try {
            const isUser= await userModel.getUser(false,body.userName)
            if(isUser.error|| isUser.response){
                return{
                    error:isUser.error
                }
            }

           body.password=await hash(body.password,10)
            body.userId=uuid()
            const user =await userModel.userCreate(body)
            if(user.error){
                return{
                    error:error
                }
            }
            return {
                response:user.response
            }
        } catch (error) {
            return {
                error:error
            }
        }
    }
}