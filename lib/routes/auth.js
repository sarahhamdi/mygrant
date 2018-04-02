const express = require('express');
const Router = express.Router;
const router = Router();
const User = require('../models/user');
const { findUserByEmail, issueToken } = require('../middleware/auth');

router.post('/login', findUserByEmail, issueToken)

// localhost:8080/auth/signup -- need to hit this endpoint
// see index.js for all the other endpoints
router.post('/register', (req, res) => {
  const { email, password, firstName, lastName, organization } = req.body
  const user = new User({ email, password, firstName, lastName, organization })
  user
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'you added a user!',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({ 
        message: err.message
      })
    })
})

module.exports = router
