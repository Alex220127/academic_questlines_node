const InventoryRepository = require('@repositories/inventoryRepository')
const inventoryRepository = InventoryRepository.getInstance()

exports.execute = async (userId, item) => {
  const query = { user_id: userId }
  const update = { $push: { items: item } }

  return inventoryRepository.update(query, update)
}
