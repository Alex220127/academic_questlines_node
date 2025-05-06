const StoreItemRepository = require('@repositories/storeItemRepository')
const storeItemRepository = StoreItemRepository.getInstance()

exports.execute = async (data) => {
  return storeItemRepository.save(data)
}
