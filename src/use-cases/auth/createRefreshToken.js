const jwtHelper = require('@helpers/jwtHelper')
const { randomUUID } = require('crypto')

exports.execute = (user, token) => {
  const tokenData = {
    token_id: randomUUID(),
    user_id: user._id,
    type: 'refresh_token',
    scope: user.role,
    auth_token_id: token
  }

  return { token_data: tokenData, jwt: jwtHelper.sign(tokenData, '1d') }
}
