const BalanceRepository = require('@repositories/BalanceRepository')
const balanceRepository = BalanceRepository.getInstance()

exports.execute = async (user) => {
  const query = {
    user_id: user
  }

  const projection = {
    balance: 1
  }

  const options = {
    lean: true
  }

  return balanceRepository.get(query, projection, options)
}
