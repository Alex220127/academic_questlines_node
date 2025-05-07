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
  },
  {
    method: 'put',
    path: '/questline-register/:register_id/nodes/:node_id',
    contract: {
      params: Schema.nodeRegisterIdSchema,
      body: Schema.updatRegisterNodeSchema
    },
    auth: {
      scopes: [ 'student' ]
    },
    controller: Controller.updateNodeStatus
  }
]
