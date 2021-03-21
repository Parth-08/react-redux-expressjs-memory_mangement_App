const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/posts',postRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect("mongodb://localhost:27017/test",{ useNewUrlParser:true,useUnifiedTopology:true })
.then(()=> app.listen(PORT, ()=>{console.log(`Server running on port:${PORT}`)}))
.catch((error)=>console.log(error.message)) 