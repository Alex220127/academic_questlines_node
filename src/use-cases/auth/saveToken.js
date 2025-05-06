const TokenRepository = require('@repositories/tokenRepository')
const tokenRepository = TokenRepository.getInstance()

exports.execute = async (data) => {
  return tokenRepository.save(data)
}
