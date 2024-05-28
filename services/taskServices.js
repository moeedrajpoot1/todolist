const taskModels=require("../models/taskModels")
const {v4:uuid}=require("uuid")

module.exports={
    taskCreate:async(body)=>{
        try {
            body.taskId=uuid()
            const task= await taskModels.taskCreate(body)
           
            return {response:task.response}
        } catch (error) {
            return {
                error:error
            }
        }

    },
    getTask:async()=>{
        try {
            const task= await taskModels.getTask()
            if(task.error){
              return {  message:"No Task Exists ",
                error:task.error
              }
            }
            return {
                response:task.response
            }
        } catch (error) {
            return {
                error:error
            }
        }
    },
    deleteTask:async(taskId)=>{
        try {
            console.log('inside servieces 1')
            const deleteTask=await taskModels.deleteTask(taskId)
            
            console.log('inside servieces 2')
            if(deleteTask.error || !deleteTask.response){
                return{
                    error:{
                        message:"Unable to delete",
                    error:deleteTask?.error|| deleteTask.response  } }
                    }
            
            return {
               
                response:{
                    message:"User Deleted",
                    response:deleteTask.response
                }}
        } catch (error) {
            return {
                error:error } }},
    updateTask:async(body)=>{
        try {
            const update=await taskModels.updateTask({...body})
            console.log(update,"==========update inside services")
            if(update.error){
                return{
                    message:"failed update",
                    error:update.error

                }
                
            }
        return {
            response:{
                response:update.response,
                message:"task updated"
            }
        }
        } catch (error) {
            return{
                error:error
            }
            
        }
    }

}