const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = QuestlineRepository.getInstance()

exports.execute = async (opt) => {
  const query = {}

  return questlineRepository.count(query)
}
