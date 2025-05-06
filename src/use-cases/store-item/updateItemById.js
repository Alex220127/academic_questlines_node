const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = new StoreItemRepository()

exports.execute = async (itemId, update) => {
  const query = {
    _id: itemId
  }

  return storeItemRepository.update(query, update)
}
