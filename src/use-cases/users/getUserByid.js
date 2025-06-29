const UserRepository = require('@repositories/userRepository')
const userRepository = UserRepository.getInstance()

exports.execute = async (id, projection = {}) => {
  const query = {
    _id: id
  }

  const options = {
    lean: true
  }

  return userRepository.get(query, projection, options)
}
