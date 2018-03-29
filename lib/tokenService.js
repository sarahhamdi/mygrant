const jwt = require('jsonwebtoken')
const config = require('./config.json')

const create = user => {
  const { _id } = user
  const payload = {
    user: {
      id: _id
    }
  }

  return jwt.sign(payload, config.secret)
}

module.exports = { create }
