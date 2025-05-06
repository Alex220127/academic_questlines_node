const bcrypt = require('bcrypt')

const SALT = 10

exports.execute = (password) => {
  return bcrypt.hashSync(password, SALT)
}
