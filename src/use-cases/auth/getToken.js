const TokenRepository = require('@repositories/tokenRepository')
const tokenRepository = TokenRepository.getInstance()

exports.execute = async (tokenId) => {
  return tokenRepository.get({ token_id: tokenId })
}
