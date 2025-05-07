const jwtHelper = require('@helpers/jwtHelper')

exports.execute = (token, type) => {
  try {
    const tokenVerified = jwtHelper.verify(token)

    return tokenVerified
  } catch (error) {
    if (error.message === 'jwt expired' && type === 'auth') {
      return jwtHelper.decode(token)
    }
    return null
  }
}
