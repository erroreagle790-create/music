const {Schema,model} = require('mongoose')
const bcryptjs = require('bcryptjs')
const JWT = require('jsonwebtoken')
const UserSchema = new Schema({
 username:{
    type:String,
    required: true
 },
email:{
    type:String,
    required: true,
    unique:true
 },
password:{
    type:String,
    required: true
 },
 phone:{
    type:String,
    required: true,
    unique:true
 },
isAdmin:{
    type:Boolean,
    default: false
 },
},{timestamps:true})
//? secue password with the bcrypt
UserSchema.pre('save', async function(next){
    const User = this;
    if(!User.isModified('password')) return next();
    try {
     const genSalt = await bcryptjs.genSalt(10);
     const hash_Password = await bcryptjs.hash(User.password,genSalt);
  User.password = hash_Password;      
} catch (error) {
 next(error)   
}    
})
//json web token
UserSchema.methods.genrateToken = async function(){
try {
 return JWT.sign({
  userId: this._id.toString(),
  username: this.username,
  email:this.email,
  isAdmin: this.isAdmin 
 },
process.env.JWT_SRCERT_KEY || "Not found",

{
expiresIn: '30d'
}
)    
} catch (error) {
 console.log(error);
    
}    
}
//comparePassword

UserSchema.methods.comparePassword = async function(password){
try {
console.log("this",this);
return  bcryptjs.compare(password,this.password)  
} catch (error) {
console.log(error);
   
}   
}

const User = new model('User',UserSchema);
module.exports = User