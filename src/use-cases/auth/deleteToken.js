const TokenRepository = require('@repositories/tokenRepository')
const tokenRepository = TokenRepository.getInstance()

exports.execute = async (tokenId) => {
  if (Array.isArray(tokenId)) {
    return tokenRepository.deleteMany({ token_id: { $in: tokenId } })
  }

  return tokenRepository.delete({ token_id: tokenId })
}
