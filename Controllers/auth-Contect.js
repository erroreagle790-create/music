const Contect = require('../Model/contect-model')

const handleContect = async(req,res) =>{
try {
    const response = req.body;
 await Contect.create(response)  
 res.status(200).json({msg: "message send Sucessfuly"}) 
} catch (error) {
 res.status(500).json({msg: "Server side error"})   
}    
}
module.exports = handleContect