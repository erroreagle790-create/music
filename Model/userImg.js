const {Schema,model} = require('mongoose')

const UserImg = new Schema({
    image:{
     type:String,
     required:true
    },
    username:{
    type:String,
    required:true,
    },
    email:{
     type:String,
    required:true,
    unique: true
    },
    problem:{
        type:String,
        required:true,
    }
},{timestamps: true})
const User_img = new model('User_img',UserImg);
module.exports = User_img