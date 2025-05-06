const ShortLinkRepository = require('@repositories/shortLinkRepository')
const shortLinkRepository = ShortLinkRepository.getInstance()

exports.execute = async (data) => {
  return shortLinkRepository.save(data)
}
