const express = require('express')
const AuthRoute = require('./Router/auth-router');
const connectedDB = require('./DATABASE/db');
const Cors = require('cors')
const contectRouter = require('./Router/contect-router')
const path = require('path');
const { middleerror } = require('./middleware/error-middlewre');
const adminRoute = require('./Router/admin-router')
const Blog = require('./Model/userImg')
const multer = require('multer')
const app = express()
const PORT = 5000;

app.use(Cors())

app.use(express.json())
app.use('/api/auth',AuthRoute)
app.use('/api/form',contectRouter)
app.use('/admin',adminRoute)

app.use(middleerror)
app.use(express.static('public'))
///Blog///////

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.resolve('./public/'));
    },
    filename: function(req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    }
  });
  
  const upload = multer({ storage: storage });
  
 app.post('/blog',upload.single('file'), async(req, res) => {
      const { username, email, problem } = req.body;
      try {
        const existingEmail = await Blog.findOne({email});
        if (existingEmail) {
          return res.status(409).json({ message: 'Email already exists' });
        }
        await Blog.create({
          image: req.file.filename,
          username,
          email,
          problem
        });
        res.status(201).json({ message: 'Blog created successfully' });
      } catch (error) {
        console.log("blog", error);
        res.status(500).json({ message: 'Server error', error });
      }
    
  });
  
///conecton
connectedDB().then(()=>{
app.listen(PORT, () =>{
    console.log(`server run Port ${PORT}`);
})
})