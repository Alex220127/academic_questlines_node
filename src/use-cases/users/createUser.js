const UserRepository = require('@repositories/userRepository')

const userRepository = new UserRepository()

exports.execute = async (userData) => {
  return userRepository.save(userData)
}
