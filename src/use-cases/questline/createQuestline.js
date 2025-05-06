const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = QuestlineRepository.getInstance()

exports.execute = async (data) => {
  return questlineRepository.save(data)
}
