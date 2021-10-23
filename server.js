const express = require('express');
const logger = require ('morgan');
const mongoose = require('mongoose');
const { urlencoded } = require('express');


// const Schema = require('')

// const router = require ('./controller')
const app = express();

const PORT = process.env.PORT || 3001;


// 
app.use(logger ("dev"));
app.use (express.json())
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);

app.use(express.static('public'));





//  connection to the mongodb accessing database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);




// starting the server
 
   
  app.listen(PORT, ()=> {
console.log("connected successfully")


  }) 
      


  

 
  