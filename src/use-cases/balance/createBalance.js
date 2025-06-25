const BalanceRepository = require('@repositories/BalanceRepository')
const balanceRepository = BalanceRepository.getInstance()

exports.execute = async (user) => {
  const data = {
    user_id: user,
    balance: 0
  }

  return balanceRepository.save(data)
}
