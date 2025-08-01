const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
username:{
    type:String,
    require: true,
},
email:{
 type:String,
 require:true   
},
message:{
    type:String,
    require:true
}
})
const Contect = new model("Contect",UserSchema);
module.exports = Contect