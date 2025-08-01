const User = require('../Model/auth-model');
const Contect = require('../Model/contect-model')
const Blog = require('../Model/userImg')

const getAlluser = async(req,res) =>{
try {
 const user = await User.find({},{password:0})
 if (!user || user.length == 0) {
    res.status(475).json({msg: "No userFound"})
 }
 res.status(200).json(user)  
} catch (error) {
console.log("getAlluser",error);
    
}    
}

const authDelete = async(req,res) =>{
try {
 const id = req.params.id;
 await User.deleteOne({_id:id})   
 res.status(200).json({msg:'User delete Sucessful'})
} catch (error) {
 console.log("authDelete",error)   
}    
}

const updateUser = async(req, res) => {
   try {
     const id = req.params.id;
     const userData = req.body;
 
     const updatedData = await User.updateOne(
       { _id: id },
       { $set: userData }
     );
 
     res.status(200).json(updatedData);
   } catch (error) {
     console.log("updateUser", error);
     res.status(500).json({ message: "Server error", error });
   }
 };
 
 
// find User Id

const getUserId = async(req,res) =>{
try {
  const id = req.params.id;
  const data = await User.findOne({_id:id},{password:0})
  res.status(200).json(data)  
} catch (error) {
console.log("getUserId",getUserId);   
}    
}

//contect

const getContect = async(req,res)=>{
try {
   const userContect = await Contect.find()
   res.status(200).json(userContect)
} catch (error) {
console.log("getContect", error);
   
}   
}

const ContectDelete = async(req,res)=>{
try {
   const id = req.params.id;
   await Contect.deleteOne({_id:id})
   res.status(200).json({msg: "message delete sucessfull"})
} catch (error) {
  console.log("ContectDelete",error);
   
}   
}
//blog

const getAllblogs = async(req,res) =>{
try {
const allblogs =  await Blog.find();
 res.status(200).send(allblogs)  
} catch (error) {
   console.log("getAllblogs",getAllblogs);
   
}
}
 const blogsDelete = async(req,res) =>{
  try {
    const id = req.params.id
    await Blog.deleteOne({_id:id})
    res.status(200).json({msg: "Delete Sucessfull"})
  } catch (error) {
    console.log("blogsDelete",error);
    
  }
 }

module.exports = {getAlluser,authDelete,updateUser,getUserId,getContect,ContectDelete,getAllblogs,blogsDelete}