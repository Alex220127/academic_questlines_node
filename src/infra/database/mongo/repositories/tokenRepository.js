const Repository = require('./repository')
const TokenModel = require('../models/Token')

module.exports = class TokenRepository extends Repository {
  constructor () {
    super(TokenModel)
  }
}
