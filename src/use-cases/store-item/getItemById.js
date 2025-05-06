const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = StoreItemRepository.getInstance()

exports.execute = async (itemId) => {
  const query = { _id: itemId }
  const projection = {}
  const options = { lean: true }

  return storeItemRepository.get(query, projection, options)
}
