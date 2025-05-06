const mongoose = require('mongoose')

const { Schema } = mongoose

const TokenSchema = new Schema({
  token_id: String,
  user_id: Schema.Types.ObjectId,
  type: String,
  scope: {
    type: String,
    enum: [ 'admin', 'student' ]
  },
  used: Boolean,
  auth_token_id: String
}, {
  versionKey: false,
  timestamps: true,
  collection: 'tokens'
})

TokenSchema.index({ token_id: 1 })

module.exports = mongoose.model('Token', TokenSchema)
