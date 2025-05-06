const UserRepository = require('@repositories/userRepository')
const userRepository = UserRepository.getInstance()

exports.execute = async (userData) => {
  return userRepository.save(userData)
}
