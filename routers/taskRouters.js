const express=require("express")
const router=express.Router()
const {taskCreate,getTask,deleteTask,updateTask}=require("../controllers/taskControllers")

router.post("/create",taskCreate)
router.get("/taskget",getTask)
router.delete("/taskdelete",deleteTask)
router.put("/update",updateTask)





module.exports=router