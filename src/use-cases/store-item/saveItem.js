const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = new StoreItemRepository()

exports.execute = async (data) => {
  return storeItemRepository.save(data)
}
