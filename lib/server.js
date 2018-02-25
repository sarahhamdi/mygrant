//https://notes.hackeryou.com/lesson/59e90c4d5f204a290cf563e3/5a6e56ff97c16e045368b00f

const express = require('express');

const app = express();
const PORT = 8080;

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello world"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});