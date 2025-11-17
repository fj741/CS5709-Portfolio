/**
 * Basic server file created using NodeJS
 * Created a database connection using mongoose 
 * Added dotenv file to hide sensitive information
 * 
 */

const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require('./routes/sendEmailRoute');


const cors = require('cors');
const mongoose = require("mongoose");

//Import routes from blogRoutes
const blogRoutes = require('./routes/blogRoutes');

const app = express();

//Created a dotenv file to hide sensitive information such as PORT and MongoDB connection string
dotenv.config()

app.use(cors())

app.use(express.json());
//Loads Blog Routes
app.use('/api/blogs', blogRoutes);
//Loading PORT
const PORT = process.env.PORT;

// Connecting to Database and catches errors
mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  dbName: "test",
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.error(err));


//Listening on Port 
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})


