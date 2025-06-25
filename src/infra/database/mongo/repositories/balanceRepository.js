const Repository = require('./repository')
const BalanceModel = require('../models/Balance')

module.exports = class BalanceRepository extends Repository {
  static instance
  static getInstance() {
    if (!BalanceRepository.instance) {
      BalanceRepository.instance = new BalanceRepository()
    }
    return BalanceRepository.instance
  }

  constructor() {
    super(BalanceModel)
  }
}
