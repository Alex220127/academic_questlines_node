const mongoose = require('mongoose')

const { Schema } = mongoose

const ShortLinkSchema = new Schema({
  short_code: String,
  document_id: Schema.Types.ObjectId
}, {
  versionKey: false,
  collection: 'short_link'
})

ShortLinkSchema.index({ short_code: 1 }, { unique: true })

module.exports = mongoose.model('ShortLink', ShortLinkSchema)
