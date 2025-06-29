const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = QuestlineRepository.getInstance()

exports.execute = async (query = {}) => {
  const projection = {}

  const options = {
    sort: {
      createdAt: -1
    }
  }

  return questlineRepository.list(query, projection, options)
}
