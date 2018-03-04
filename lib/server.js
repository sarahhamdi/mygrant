//https://notes.hackeryou.com/lesson/59e90c4d5f204a290cf563e3/5a6e56ff97c16e045368b00f
// https://github.com/swbloom/react-express-mongo-mongoose-todo/blob/with-mongoose/lib/server.js

//e xpress
const express = require('express');
const app = express();

// mongodb
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/mygrant';
mongoose.connect(uri)

const PORT = 8080;

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello world"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});