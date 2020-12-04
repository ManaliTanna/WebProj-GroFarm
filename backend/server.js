//Importing Modules
const express = require('express');
const fileUpload = require("express-fileupload");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Creating App
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use (fileUpload());

//DB Connection
//const uri = process.env.ATLAS_URI;
const uri= "mongodb+srv://User0:User0@cluster0.ctw4f.mongodb.net/test?retryWrites=true&w=majority" ;
/*mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://User0:User0@cluster0.ctw4f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useCreateIndex: true });
client.connect(err => {
    if (err) console.log("error");
  const collection = client.db("test").collection("test");
  // perform actions on the collection object
  //client.close();
});*/


mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, err => {
        console.log('connected')
    });



//Routes
const exercisesRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const shoppingcarts = require('./routes/shoppingcarts');
const chat = require('./routes/chat');
const ratings = require('./routes/ratings');
const upload = require('./routes/upload');
const verify = require('./routes/verify');
const about = require('./routes/about');

app.use('/products', exercisesRouter);
app.use('/users', usersRouter);
app.use('/Cart', shoppingcarts);
app.use('/Chat', chat);
app.use('/Rating', ratings);
app.use('/Upload', upload);
app.use('/verify', verify);
app.use('/about', about);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
