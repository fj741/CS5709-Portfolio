/**
 * Basic server file created using NodeJS
 * Created a database connection using mongoose 
 * Added dotenv file to hide sensitive information
 * 
 */


const express = require("express");
const dotenv = require("dotenv");

const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

//Created a dotenv file to hide sensitive information such as PORT and MongoDB connection string
dotenv.config()

app.use(express.json())

const PORT = process.env.PORT;

// Connecting to Database
mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));



app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})


