const jwt = require('jsonwebtoken')
const config = require('../config.json')

const User = require('../models/user')
const tokenService = require('../tokenService')

const findUserByEmail = (req, res, next) => {
  const { email } = req.body
  User.findOne({ email }).then(user => {
    if (user) {
      req.user = user
      // this sends this to the next function
      // in the router chain
      next()
    } else {
      res.status(400).json({ message: 'unauthorized' })
    }
  })
}

const issueToken = (req, res, next) => {
  const { password } = req.body
  const { user } = req
  user
    .comparePassword(password)
    .then(isMatch => {
      if (isMatch) {
        const token = tokenService.create(user)
        res.status(200).json({
          message: 'success',
          payload: token
        })
      } else {
        res.status(400).json({ message: 'unauthorized' })
      }
    })
}

const verifyToken = (req, res, next) => {
  const authHeader = req.get('authorization')

  if (!authHeader) {
    res.status(401).json({
      message: 'unauthorized'
    })
  }
  const token = authHeader.split(' ')[1] // grab just the token
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) res.status(401).json({ 
      message: 'forbidden' 
    })
    if (decoded) {
      req.token = decoded
      next()
    }
  })
}

module.exports = {
  issueToken,
  findUserByEmail,
  verifyToken
}
  