const Repository = require('./repository')
const ShortLinkModel = require('../models/ShortLink')

module.exports = class ShortLinkRepository extends Repository {
  static instance
  static getInstance() {
    if (!ShortLinkRepository.instance) {
      ShortLinkRepository.instance = new ShortLinkRepository()
    }
    return ShortLinkRepository.instance
  }
  constructor () {
    super(ShortLinkModel)
  }
}
