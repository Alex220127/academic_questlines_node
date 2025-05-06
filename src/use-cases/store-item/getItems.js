const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = new StoreItemRepository()

exports.execute = async () => {
  const query = { active: true }
  const projection = {}
  const options = { lean: true }

  return storeItemRepository.list(query, projection, options)
}
