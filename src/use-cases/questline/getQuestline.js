const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = QuestlineRepository.getInstance()

exports.execute = async (query, projection) => {
  const options = {
    lean: true
  }

  return questlineRepository.get(query, projection, options)
}
