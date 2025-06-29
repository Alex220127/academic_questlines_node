const Schema = require('./QuestlinesSchema')
const Controller = require('./QuestlinesController')

module.exports = [
  {
    method: 'post',
    path: '/questlines',
    contract: {
      body: Schema.createQuestlineSchema
    },
    auth: {
      scopes: [ 'admin' ]
    },
    controller: Controller.createQuestline
  },
  {
    method: 'get',
    path: '/questlines',
    contract: {
      query: Schema.paginateSchema
    },
    auth: {
      scopes: [ 'admin', 'student' ]
    },
    controller: Controller.getQuestlines
  },
  {
    method: 'get',
    path: '/questlines/:questline_id/share-link',
    contract: {
      params: Schema.questlineIdSchema
    },
    auth: {
      scopes: [ 'admin' ]
    },
    controller: Controller.shareLink
  },
  {
    method: 'get',
    path: '/questline/report',
    contract: {
      query: Schema.reportSchema,
      headers: Schema.headersSchema
    },
    auth: {
      scopes: [ 'admin' ]
    },
    controller: Controller.getReport
  }
]
