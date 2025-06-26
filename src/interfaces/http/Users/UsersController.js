const createUser = require('@use-cases/users/createUser')
const getUserByEmail = require('@use-cases/users/getUserByEmail')
const encryptPassword = require('@use-cases/auth/encryptPassword')
const comparePassword = require('@use-cases/auth/comparePassword')
const createToken = require('@use-cases/auth/createToken')
const createRefreshToken = require('@use-cases/auth/createRefreshToken')
const saveToken = require('@use-cases/auth/saveToken')
const createBalance = require('@use-cases/balance/createBalance')
const getUserInventory = require('@use-cases/inventory/getUserInventory')

exports.createUser = async (req, res) => {
  const { body } = req
  body.password = encryptPassword.execute(body.password)

  try {
    const user = await createUser.execute(body)

    if (user.role === 'student') {
      await createBalance.execute(user._id)
    }

    const token = createToken.execute(user)
    const refreshToken = createRefreshToken.execute(user, token.token_id)

    await saveToken.execute(token)
    await saveToken.execute(refreshToken)

    return res.status(201).json({ token: token.jwt, refresh_token: refreshToken.jwt })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json('email_in_use')
    }

    return res.status(422).json('fail_create_user')
  }
}

exports.login = async (req, res) => {
  try {
    const { body: { email, password } } = req

    const user = await getUserByEmail.execute(email)

    const isValidPassword = comparePassword.execute(password, user.password)

    if (!isValidPassword) {
      return res.status(404).send('user_not_found')
    }

    const token = createToken.execute(user)
    const refreshToken = createRefreshToken.execute(user, token.token_data.token_id)

    await saveToken.execute(token.token_data)
    await saveToken.execute(refreshToken.token_data)

    return res.status(200).json({ token: token.jwt, refresh_token: refreshToken.jwt })
  } catch (error) {
    return res.status(400).send()
  }
}

exports.getInventory = async (req, res) => {
  const { params: { user_id } } = req

  const inventory = await getUserInventory.execute(user_id)

  return res.status(200).json(inventory?.items || [])
}
