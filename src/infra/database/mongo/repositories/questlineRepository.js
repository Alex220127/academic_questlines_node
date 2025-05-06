const Repository = require('./repository')
const QuestlineModel = require('../models/Questline')

module.exports = class QuestlineRepository extends Repository {
  static instance
  static getInstance() {
    if (!QuestlineRepository.instance) {
      QuestlineRepository.instance = new QuestlineRepository()
    }
    return QuestlineRepository.instance
  }
  constructor () {
    super(QuestlineModel)
  }
}
