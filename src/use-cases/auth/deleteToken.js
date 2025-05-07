const TokenRepository = require('@repositories/tokenRepository')
const tokenRepository = TokenRepository.getInstance()

exports.execute = async (tokenId) => {
  return tokenRepository.delete({ token_id: tokenId })
}
