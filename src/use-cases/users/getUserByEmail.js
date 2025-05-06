const UserRepository = require('@repositories/userRepository')
const userRepository = UserRepository.getInstance()

exports.execute = async (email) => {
  const query = {
    email
  }

  const projection = {}

  const options = {
    lean: true
  }

  return userRepository.get(query, projection, options)
}
