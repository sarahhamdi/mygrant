const express = require("express");
const Router = express.Router;
const router = Router();
const Grant = require('../models/grant');
const { verifyToken } = require("../middleware/auth");


// ++++++++++++++++++ GRANTS +++++++++++++++

router.get('/all', verifyToken, (req, res) => {
  const { user } = req.token;
  Grant
    .find({ user: user.id })
    .then(docs => {
      res.status(200).json({
        message: "you got all the grants!",
        payload: docs
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
});

router.post('/new', verifyToken, (req, res) => {
  const { name, issuer, amount, due, grantLink, tags, status, granted, notes } = req.body;
  const { user } = req.token;
  const grant = new Grant({ name, issuer, amount, due, grantLink, tags, status, granted, notes, user: user.id });

  grant
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'you posted a grant!',
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

router.patch('/fix', (req, res) => {
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

module.exports = router;