const Repository = require('./repository')
const UserModel = require('../models/User')

module.exports = class UserRepository extends Repository {
  static instance
  static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }
  constructor () {
    super(UserModel)
  }
}
