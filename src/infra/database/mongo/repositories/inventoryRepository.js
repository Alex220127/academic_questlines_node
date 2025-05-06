const Repository = require('./repository')
const InventoryModel = require('../models/Inventory')

module.exports = class InventoryRepository extends Repository {
  static instance
  static getInstance() {
    if (!InventoryRepository.instance) {
      InventoryRepository.instance = new InventoryRepository()
    }
    return InventoryRepository.instance
  }

  constructor() {
    super(InventoryModel)
  }
}
