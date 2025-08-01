const adminMiddleware = (req,res,next) =>{
try {
const adminRole = req.user.isAdmin
if(!adminRole) return res.status(407).json({msg: 'Admin not find !'})  
next()    
} catch (error) {
console.log("adminMiddleware",error);
    
}    
}

module.exports = adminMiddleware