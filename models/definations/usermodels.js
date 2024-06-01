const {Model,DataTypes}=require("sequelize")
const sequelize=require("../../bin/dbconnection")


class Users extends Model{}

Users.init({
userId:{
    primaryKey:true,
    type:DataTypes.STRING()
},
userName:{
    type:DataTypes.STRING(),
    allowNull:false
},
password:{
    type:DataTypes.STRING(),
    allowNull:false
}


},{timestamps:true,paranoid:true,tableName:"users",sequelize})


module.exports=Users