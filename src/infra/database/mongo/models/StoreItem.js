const mongoose = require('mongoose')

const { Schema } = mongoose

const StoreItemSchema = new Schema({
  name: String,
  icon: String,
  price: Number,
  active: Boolean,
  redeem_limit: Number,
  total_redeemed: Number
}, {
  versionKey: false,
  timestamps: true,
  collection: 'store_items'
})

StoreItemSchema.index({ active: 1 })

module.exports = mongoose.model('StoreItem', StoreItemSchema)
