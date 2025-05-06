const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = StoreItemRepository.getInstance()

exports.execute = async (itemId) => {
  const query = { _id: itemId }

  return storeItemRepository.delete(query)
}
