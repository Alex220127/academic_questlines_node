const mongoose = require('mongoose')

const { Schema } = mongoose

const ItemsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  icon: String,
  redeemed_at: Date,
  used: {
    type: Boolean,
    default: false
  }
}, {
  _id: false,
  versionKey: false
})

const InventorySchema = new Schema({
  user_id: Schema.Types.ObjectId,
  items: {
    type: [ ItemsSchema ],
    default: []
  }
}, {
  versionKey: false,
  timestamps: true,
  collection: 'inventory'
})

module.exports = mongoose.model('Inventory', InventorySchema)
