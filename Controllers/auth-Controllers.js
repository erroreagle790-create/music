const User = require('../Model/auth-model')
// const multer = require('multer')
const handleSignUp = async(req,res) =>{
try {
   console.log(req.body);
   const{username,email,password, phone,isAdmin} = req.body
   
const UserCreated = await User.create({
username,
email,
password, 
phone,
isAdmin
})
if (UserCreated) {
res.status(200).json({
msg: "Registration Sucessful",
token: await UserCreated.genrateToken(),
userId:  UserCreated._id.toString()   
})
}
console.log("SignUp",UserCreated);
    
} catch (error) {
 res.status(404).json({msg:'email already exits'})   
 console.log("Error in registration from",error);
    
}    
}

//login

const handleLogin = async(req,res) =>{
try {
   const{email,password} = req.body;
   const UserExits = await User.findOne({email})

   if (!UserExits) {
      return res.status(402).json({ msg: 'Invalid Credentials' });
   }
     console.log("hello");
     
   const isMatch = await UserExits.comparePassword(password)
   if(isMatch){
   res.status(200).json({
   msg: "Login Sucessful",
   token: await UserExits.genrateToken(),
   userId: UserExits._id.toString()   
   })
   }else{
      res.status(401).json({msg: "Invalid email or password"})
   }
   
} catch {
   res.status(404).json({msg:'Internal Server Error'})   
 console.log("Error in registration from",error);
} {
   
}   
}


//set user

const user = (req,res) =>{
try {
   const userData = req.user;
   console.log(userData);
  return res.status(200).json({userData})
} catch (error) {
   console.log(error);
   
}
}

module.exports ={handleSignUp,handleLogin,user}
