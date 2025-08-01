const JWT  = require('jsonwebtoken')
const User = require('../Model/auth-model')
const authMiddleware = async(req,res,next) =>{
        const token = req.header('Authorization')
        if (!token) {
            return res.status(401)
            .json({msg:"Token not Provide"})
        }
       const jwttoken = token.replace("Bearer","").trim()
    try{
const isVerified = JWT.verify(jwttoken,process.env.JWT_SRCERT_KEY || "Not found",)
const userData = await User.findOne({email:isVerified.email}).select({
    password:0
})
console.log(userData);
 req.user = userData;
 req.token = token
 req.userId = userData._id

next()
    } catch (error) {
        res.status(404).json({msg : "Inavalid token"})
    }
}
module.exports = authMiddleware