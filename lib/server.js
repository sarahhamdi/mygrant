//https://notes.hackeryou.com/lesson/59e90c4d5f204a290cf563e3/5a6e56ff97c16e045368b00f
// https://github.com/swbloom/react-express-mongo-mongoose-todo/blob/with-mongoose/lib/server.js

//express
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
// this could also be writtedn as:
// const router = require('./routes/index.js')
// but doesn't need to be because index.js 
// is the default file, so if you exclude it
// in the require, it will just look for it
const router = require('./routes')

const PORT = 8080;

const uri = 'mongodb://localhost:27017/mygrant';
mongoose.connect(uri);

// this allows us to recieve backend requests as json
// yes, I spent 45 minutes troubleshooting
// because i didn't have this
// thanks for asking #neverforget
app.use(bodyParser.json());

app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});