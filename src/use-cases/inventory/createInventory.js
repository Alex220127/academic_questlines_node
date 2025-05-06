const InventoryRepository = require('@repositories/inventoryRepository')
const inventoryRepository = InventoryRepository.getInstance()

exports.execute = async (data) => {
  return inventoryRepository.save(data)
}
