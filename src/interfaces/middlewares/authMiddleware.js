const jwtHelper = require('../../infra/helpers/jwtHelper')// require('@helpers/jwtHelper')

module.exports = (req, res, next, auth) => {
  const { headers: { authorization } } = req

  if (!authorization) {
    return res.status(403).send('missing_authentication_token')
  }

  const token = authorization.split('Bearer ')[1]

  try {
    const tokenData = jwtHelper.verify(token)

    if (!auth.scopes.includes(tokenData.scope)) {
      return res.status(403).send('insuficient_scope')
    }

    req.credentials = tokenData

    next()
  } catch (error) {
    return res.status(403).send('invalid_authentication_token')
  }
}
