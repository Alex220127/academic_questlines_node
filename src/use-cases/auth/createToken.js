const jwtHelper = require('@helpers/jwtHelper')
const { randomUUID } = require('crypto')

exports.execute = (user) => {
  const tokenData = {
    token_id: randomUUID(),
    user_id: user._id,
    type: 'auth_token',
    scope: user.role
  }

  return { jwt: jwtHelper.sign(tokenData, '1h'), token_data: tokenData }
}
