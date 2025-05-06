const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

exports.execute = async (data) => {
  return questlineRegisterRepository.save(data)
}
