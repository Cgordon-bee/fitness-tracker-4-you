const express = require('express');
const logger = require ('morgan');
const mongroose = require('mongoose');
const mongodb = require("mongodb");
const router = require ('express');

// const Schema = require('')

// const router = require ('./controller')
const app = express();

const PORT = process.env.PORT || 3001;



// app.use(logger ("dev"));





// starting the server
 
app.use (function (req, res) {
    res.send('Hello World');
    console.log ("server sucessfully connected");
  });
   
  app.listen(3001);
      


  

// connection to the mongodb accessing database
// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/fitnessdb.workoutdb',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     }
//   );
  
  