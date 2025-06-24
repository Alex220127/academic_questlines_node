const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

exports.execute = async (query, projection) => {
  const options = {
    lean: true
  }

  return questlineRegisterRepository.list(query, projection, options)
}
