const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = new QuestlineRepository()

exports.execute = async (opt) => {
  const query = {}

  return questlineRepository.count(query)
}
