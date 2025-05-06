const ShortLinkRepository = require('@repositories/shortLinkRepository')
const shortLinkRepository = ShortLinkRepository.getInstance()

exports.execute = async (query) => {
  return shortLinkRepository.get(query)
}
