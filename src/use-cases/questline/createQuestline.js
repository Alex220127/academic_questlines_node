const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = new QuestlineRepository()

exports.execute = async (data) => {
  return questlineRepository.save(data)
}
