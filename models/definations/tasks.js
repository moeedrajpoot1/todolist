const {Model,DataTypes} = require("sequelize")
const sequelize= require('../../bin/dbconnection')

class tasks extends Model{}

tasks.init({
    taskId:{
        primaryKey:true,
        type:DataTypes.STRING(255)
    },
    taskName:{
        allowNull:false,
        type:DataTypes.STRING(),
        
    },
    taskInfo:{
        allowNull:false,
        type:DataTypes.STRING(),
        
    }
},{timestamps:true,paranoid:true,tableName:"tasks",sequelize})

module.exports=tasks









