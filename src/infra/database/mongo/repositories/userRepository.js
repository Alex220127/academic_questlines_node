const Repository = require('./repository')
const UserModel = require('../models/User')

module.exports = class UserRepository extends Repository {
  constructor () {
    super(UserModel)
  }
}
