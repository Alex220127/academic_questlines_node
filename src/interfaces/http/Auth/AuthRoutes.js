const Schema = require('./AuthSchema')
const Controller = require('./AuthController')

module.exports = [
  {
    method: 'post',
    path: '/refresh-token',
    contract: {
      body: Schema.refreshTokenSchema
    },
    controller: Controller.refreshToken
  }
]
