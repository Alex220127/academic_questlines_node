require('module-alias/register')

const jwtHelper = require('@helpers/jwtHelper')
const getToken = require('@use-cases/auth/getToken')
const deleteToken = require('@use-cases/auth/deleteToken')

module.exports = async (req, res, next, auth) => {
  const { headers: { authorization } } = req

  if (!authorization) {
    return res.status(403).send('missing_authentication_token')
  }

  const token = authorization.split('Bearer ')[1]

  try {
    const tokenData = jwtHelper.verify(token)

    const dbToken = await getToken.execute(tokenData.token_id)

    if (!dbToken) {
      return res.status(403).send('missing_authentication_token')
    }

    if (!auth.scopes.includes(dbToken.scope)) {
      return res.status(403).send('insuficient_scope')
    }

    req.credentials = dbToken

    next()
  } catch (error) {
    const decoded = jwtHelper.decode(token)
    await deleteToken.execute(decoded.token_id)

    return res.status(403).send('invalid_authentication_token')
  }
}
