const InventoryRepository = require('@repositories/inventoryRepository')
const inventoryRepository = InventoryRepository.getInstance()

exports.execute = async (userId) => {
  const query = { user_id: userId }
  const projection = { _id: 1, items: 1 }
  const options = { lean: true }

  return inventoryRepository.get(query, projection, options)
}
