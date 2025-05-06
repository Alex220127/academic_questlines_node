const Repository = require('./repository')
const TokenModel = require('../models/Token')

module.exports = class TokenRepository extends Repository {
  static instance
  static getInstance() {
    if (!TokenRepository.instance) {
      TokenRepository.instance = new TokenRepository()
    }
    return TokenRepository.instance
  }
  constructor () {
    super(TokenModel)
  }
}
