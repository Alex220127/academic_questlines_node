const Schema = require('./QuestlineRegisterSchema')
const Controller = require('./QuestlineRegisterController')

module.exports = [
  {
    method: 'post',
    path: '/users/questline-register',
    contract: {
      body: Schema.shortCodeSchema
    },
    auth: {
      scopes: [ 'student' ]
    },
    controller: Controller.joinToQuestline
  }
]
