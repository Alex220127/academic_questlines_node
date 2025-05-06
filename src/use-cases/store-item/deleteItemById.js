const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = new StoreItemRepository()

exports.execute = async (itemId) => {
  const query = { _id: itemId }

  return storeItemRepository.delete(query)
}
