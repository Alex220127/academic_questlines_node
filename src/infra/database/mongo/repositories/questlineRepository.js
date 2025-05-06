const Repository = require('./repository')
const QuestlineModel = require('../models/Questline')

module.exports = class QuestlineRepository extends Repository {
  constructor () {
    super(QuestlineModel)
  }
}
