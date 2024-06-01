const sequelize=require("../bin/dbconnection")
const tasks=require("../models/definations/tasks")
const Users=require("../models/definations/usermodels")
const models={tasks,Users}


const Db={}

Db.sequelize=sequelize
sequelize.models=models

module.exports={Db,models}