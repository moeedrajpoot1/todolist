const joi=require("joi")
const taskServices=require("../services/taskServices")


const taskCreateScheme=joi.object().keys({
    taskName:joi.string().required(),
    taskInfo:joi.string().required()
})
const  deleteSchema=joi.object().keys({
    taskId:joi.string().required()
})
const updateSchema=joi.object().keys({
    taskId:joi.string().required(),
    taskName:joi.string(),
    taskInfo:joi.string(),
})




module.exports={
    taskCreate:async(req,res)=>{
        try {
            const validate= await taskCreateScheme.validateAsync(req.body)
            const task=await taskServices.taskCreate(validate)
            if(task.error){
                return {
                    error:error
                }
            }
            return res.send({
                message:"Task Created",
                response:task.response
            })
        } catch (error) {
            return res.send({
                message:error.message
            })
            
        }
    },
    getTask:async(req,res)=>{
        try {
            const task= await taskServices.getTask()
            if(task.error){
                return res.send({error:task.error})
            }
       return res.send({
        response:task.response
       })

        } catch (error) {
           return res.send({
            message:error.message
           }) 
        }
    },
    deleteTask:async(req,res)=>{
        try {
            console.log(req.query,"==========query")
            const validate= await deleteSchema.validateAsync(req.query)
            const deleteTask=await taskServices.deleteTask(validate.taskId)
            console.log('inside the delete user 2')
            console.log(deleteTask,"===========deleteTask")
            if(deleteTask.error){
                return res.send({
                    error:deleteTask.error
                })
            }
            return res.send( {
                response:deleteTask.response
            })
        } catch (error) {
            return res.send({
                message:error.message
            })
        }
    },
    updateTask:async(req,res)=>{
        try {
            const validate= await updateSchema.validateAsync(req.body)
            const update= await taskServices.updateTask(validate)
            if(update.error){
                return res.send({
                    error:update.error
                })
            }
            return res.send({
                response:update.response
            })
        } catch (error) {
            return res.send({
                message:error
            })
        }
    }
}