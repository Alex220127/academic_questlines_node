const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String
}, {
  versionKey: false,
  timestamps: true,
  collection: 'users'
})

UserSchema.index({ email: 1 }, { unique: true })

module.exports = mongoose.model('User', UserSchema)
