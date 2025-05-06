const mongoose = require('mongoose')

const { MONGO_URL } = process.env

exports.connect = async () => {
  if (mongoose.connection.readyState) {
    return true
  }

  await mongoose.connect(MONGO_URL)
}

mongoose.connection.on('connected', () => {
  console.log('mongoose ready')
})

mongoose.connection.on('error', () => {
  console.log('mongoose error')
})
