const sequelize=require("../bin/dbconnection")
const tasks=require("../models/definations/tasks")

const models={tasks}


const Db={}

Db.sequelize=sequelize
sequelize.models=models

module.exports={Db,models}