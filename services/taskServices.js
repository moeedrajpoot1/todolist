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
            
            const deleteTask=await taskModels.deleteTask(taskId)
           
            if(deleteTask.error || !deleteTask.response){
                return{
                    message:"Unable to delete",
                    error:deleteTask?.error|| deleteTask.response  } }
            
            return {
                message:"Task deleted",
                response:deleteTask.response }
        } catch (error) {
            return {
                error:error } }},
    updateTask:async()=>{
        try {
            const update=await taskModels.updateTask({...body})
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