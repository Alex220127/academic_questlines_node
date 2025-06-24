const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

exports.execute = async (params) => {
  return questlineRegisterRepository.update(params.query, params.update)
}
