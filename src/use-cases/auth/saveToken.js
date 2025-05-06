const TokenRepository = require('@repositories/tokenRepository')

const tokenRepository = new TokenRepository()

exports.execute = async (data) => {
  return tokenRepository.save(data)
}
