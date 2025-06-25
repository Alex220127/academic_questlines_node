const mongoose = require('mongoose')

const { Schema } = mongoose

const BalanceSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  balance: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false,
  timestamps: true,
  collection: 'balance'
})

BalanceSchema.index({ user_id: 1 })

module.exports = mongoose.model('Balance', BalanceSchema)
