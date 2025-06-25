const BalanceRepository = require('@repositories/BalanceRepository')
const balanceRepository = BalanceRepository.getInstance()

exports.execute = async ({ user, value, operation }) => {
  const query = {
    user_id: user
  }

  const inc = operation === 'sum' ? 1 : -1

  const update = {
    $inc: {
      balance: value * inc
    }
  }

  return balanceRepository.update(query, update)
}
