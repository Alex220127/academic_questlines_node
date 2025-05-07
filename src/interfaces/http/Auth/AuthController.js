const verifyToken = require('@use-cases/auth/verifyToken')
const getToken = require('@use-cases/auth/getToken')
const deleteToken = require('@use-cases/auth/deleteToken')
const saveToken = require('@use-cases/auth/saveToken')
const createToken = require('@use-cases/auth/createToken')
const createRefreshToken = require('@use-cases/auth/createRefreshToken')

exports.refreshToken = async (req, res) => {
  const { body: { token, refresh_token } } = req

  const tokenVerified = verifyToken.execute(token, 'auth')
  const refreshTokenVerified = verifyToken.execute(refresh_token, 'refresh')

  if (!tokenVerified || !refreshTokenVerified) {
    return res.status(403).send('invalid_token')
  }

  const dbToken = await getToken.execute(tokenVerified.token_id)
  const dbRefreshToken = await getToken.execute(refreshTokenVerified.token_id)

  if (!dbToken || !dbRefreshToken) {
    return res.status(403).send('invalid_token')
  }

  if (dbRefreshToken.auth_token_id !== dbToken.token_id) {
    return res.status(403).send('invalid_token_pair')
  }

  await deleteToken.execute([ dbToken.token_id, dbRefreshToken.token_id ])

  const user = {
    _id: dbToken.user_id,
    role: dbToken.scope
  }

  const newToken = createToken.execute(user)
  const newRefreshToken = createRefreshToken.execute(user, newToken.token_data.token_id)

  await saveToken.execute([ newToken.token_data, newRefreshToken.token_data ])

  return res.status(200).json({ token: newToken.jwt, refresh_token: newRefreshToken.jwt })
}
