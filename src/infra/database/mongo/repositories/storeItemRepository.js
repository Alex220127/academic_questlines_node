const Repository = require('./repository')

const StoreItemModel = require('../models/StoreItem')

module.exports = class StoreItemRepository extends Repository {
  constructor () {
    super(StoreItemModel)
  }
}
