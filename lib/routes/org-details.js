const express = require("express");
const Router = express.Router;
const router = Router();
const OrgDetail = require('./models/orgdetail');
const { verifyToken } = require("../middleware/auth");


// ++++++++++++++++++ ORG DETAILS +++++++++++++++

router.get('/all', (req, res) => {
  OrgDetail
    .find()
    .then(docs => {
      res.status(200).json({
        message: "You got all the org details!",
        payload: docs
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

router.post('/new', (req, res) => {
  const { title, text } = req.body;
  const orgDetail= new OrgDetail({ title, text });

  orgDetail
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'you posted an org detail!',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message 
      })
    })
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  OrgDetail
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

router.patch('/fix', (req, res) => {
  const { id, title, text } = req.body;

  OrgDetail
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

module.exports = router;