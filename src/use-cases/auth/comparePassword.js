const bcrypt = require('bcrypt')

exports.execute = (password, encrypted) => {
  return bcrypt.compareSync(password, encrypted)
}
