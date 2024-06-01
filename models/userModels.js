const {models}=require("./index")


module.exports={
    userCreate:async(body)=>{
        try {
            const user= await models.Users.create({...body});
            return {
                response:user
            }
        } catch (error) {
            return {
                error:error
            }
        }
    },
    getUser:async(userId,userName)=>{
        try {
            const user = await models.Users.findOne({...(userId?{where:{userId:userId}}:{where:{userName:userName}}),
            attributes:{
                exclude:["deletedAt","createdAt","updatedAt"]
            }
        })
            return {
                response:user
            }
        } catch (error) {
            return {
                error:error
            }
        }
    }
}