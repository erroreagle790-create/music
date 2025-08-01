const mongoose = require('mongoose');

const URI = "mongodb+srv://erroreagle790:8057892261@cluster0.ijgid.mongodb.net/Movies_B?retryWrites=true&w=majority&appName=Cluster0"

const connectedDB = async(req,res) =>{
try {
 console.log('Database Connected');
   await mongoose.connect(URI);  
} catch (error) {
 console.log(error);
    
}    
}
module.exports = connectedDB;