//https://notes.hackeryou.com/lesson/59e90c4d5f204a290cf563e3/5a6e56ff97c16e045368b00f
// https://github.com/swbloom/react-express-mongo-mongoose-todo/blob/with-mongoose/lib/server.js

//e xpress
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// mongodb
const mongoose = require('mongoose');
const Grant = require('./models/grant');
const Organization = require('./models/organization');
const OrgInfo = require('./models/orginfo');
const uri = 'mongodb://localhost/mygrant';
mongoose.connect(uri);

// this allows us to recieve backend requests as json
// yes, I spent 45 minutes troubleshooting
// because i didn't have this
app.use(bodyParser.json());

const PORT = 8080;

// can't you just write a function for all these
// requests and then call them at the end of this doc?
// how does sylvia use express Router?
// https://github.com/sylvianguy/styleguide/tree/master/api

app.get('/org-details', (req, res) => {
  OrgInfo
    .find()
    .then(docs => {
      res.status(200).json({
        message: "success",
        payload: docs
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

app.post('/org-details', (req, res) => {
  const { title, text } = req.body;
  const orgInfo = new OrgInfo({ title, text });

  orgInfo
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'success',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message 
      })
    })
})

app.delete('/org-details', (req, res) => {
  const id = req.body.id;

  OrgInfo
    .findByIdAndRemove(id)
    .then(doc => {
      res.status(200).json({
        message: 'this org detail has been deleted',
        payload: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
})

app.patch('/org-details', (req, res) => {
  const { id, title, text } = req.body;

  OrgInfo
    .findByIdAndUpdate(id, {
      title, 
      text 
    })
    .then(doc => {
      res.status(200).json({
        message: 'this org detail has been updated',
        payload: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
})


app.get('/grants', (req, res) => {
  Grant
    .find()
    .then(docs => {
      res.status(200).json({
        message: "success",
        payload: docs
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
});

app.post('/grants', (req, res) => {
  const { name, issuer, amount, due, grantLink, tags, status, granted, notes } = req.body;
  const grant = new Grant({ name, issuer, amount, due, grantLink, tags, status, granted, notes });

  grant
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'success',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

app.delete('/grants', (req, res) => {
  const id = req.body.id;

  Grant
    .findByIdAndRemove(id)
    .then(doc => {
      res.status(200).json({
        message: 'this grant has been deleted',
        payload: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
})

app.patch('/grants', (req, res) => {
  const { id, name, issuer, amount, due, grantLink, tags, status, granted, notes } = req.body;

  Grant
    .findByIdAndUpdate(id, {
      id, name, issuer, amount, due, grantLink, tags, status, granted, notes
    })
    .then(doc => {
      res.status(200).json({
        message: 'this grant has been updated',
        payload: doc
      })
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      })
    })
})


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});