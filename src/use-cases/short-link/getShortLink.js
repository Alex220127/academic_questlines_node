const ShortLinkRepository = require('@repositories/shortLinkRepository')
const shortLinkRepository = ShortLinkRepository.getInstance()

exports.execute = async (query, projection) => {
  const options = {
    lean: true
  }

  return shortLinkRepository.get(query, projection, options)
}
