const Repository = require('./repository')
const QuestlineRegisterModel = require('../models/QuestlineRegister')

module.exports = class QuestlineRegisterRepository extends Repository {
  static instance
  static getInstance () {
    if (!QuestlineRegisterRepository.instance) {
      QuestlineRegisterRepository.instance = new QuestlineRegisterRepository()
    }

    return QuestlineRegisterRepository.instance
  }

  constructor () {
    super(QuestlineRegisterModel)
  }
}
