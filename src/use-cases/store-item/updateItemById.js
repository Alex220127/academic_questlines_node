const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = StoreItemRepository.getInstance()

exports.execute = async (itemId, update) => {
  const query = {
    _id: itemId
  }

  return storeItemRepository.update(query, update)
}
