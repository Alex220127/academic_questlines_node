const Schema = require('./UsersSchema')
const Controller = require('./UsersController')

module.exports = [
  {
    method: 'post',
    path: '/users',
    contract: {
      body: Schema.createUserSchema
    },
    controller: Controller.createUser
  },
  {
    method: 'post',
    path: '/users/login',
    contract: {
      body: Schema.loginSchema
    },
    controller: Controller.login
  },
  {
    method: 'get',
    path: '/users/:user_id/inventory',
    contract: {
      params: Schema.userIdSchema
    },
    auth: {
      scopes: [ 'student', 'admin' ]
    },
    controller: Controller.getInventory
  }
]
