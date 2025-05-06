const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

exports.sign = (data, expires) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: expires })
}

exports.verify = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

exports.decode = (token) => {
  return jwt.decode(token)
}
