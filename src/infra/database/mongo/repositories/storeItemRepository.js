const Repository = require('./repository')

const StoreItemModel = require('../models/StoreItem')

module.exports = class StoreItemRepository extends Repository {
  static instance
  static getInstance() {
    if (!StoreItemRepository.instance) {
      StoreItemRepository.instance = new StoreItemRepository()
    }
    return StoreItemRepository.instance
  }
  constructor () {
    super(StoreItemModel)
  }
}
