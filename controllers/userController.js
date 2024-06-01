const userServices=require('../services/userServices')
const joi =require('joi')
const userSchema=joi.object().keys({
    userName:joi.string().required(),
    password:joi.string().required()
})


module.exports={
    userCreate:async(req,res)=>{
        try {
            const validate= await userSchema.validateAsync(req.body)
            const user=await userServices.userCreate(validate)
            if(user.error){
                return res.send({
                  error:user.error
                })
            }

            return res.send({
                message:"User Saved",
                response:user
            })
        } catch (error) {
            return res.status(400).send({
                message:error.message
            })
        }
    }
}