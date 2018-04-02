const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/user')
const { verifyToken } = require('../middleware/auth')

// ++++++++++++++++++ USERS +++++++++++++++

router.get('/current', verifyToken, (req, res) => {
  const { user } = req.token
  if (user && user.id) {
    User.findById(user.id)
            .then(user => {
              res.status(200).send({
                message: 'success',
                payload: user
              })
            })
  } else {
    res.status(401).send({
      message: 'forbidden'
    })
  }
})

router.get('/all', (req, res) => {
  User
    .find()
    .then(docs => {
      res.status(200).json({
        message: "you got all the users!",
        payload: docs
        
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  User
    .findByIdAndRemove(id)
    .then(doc => {
      res.status(200).json({
        message: "you deleted a user",
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
  const { id, firstName, lastName, email, password, organization } = req.body;

  User
    .findByIdAndUpdate(id, {
      firstName, lastName, email, password, organization
    })
    .then(doc => {
      res.status(200).json({
        message: "you have udpated user account info",
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