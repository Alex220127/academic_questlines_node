const mongoose = require('mongoose')

const { Schema } = mongoose

const NodesSchema = new Schema({
  name: String,
  reward: Number,
  type: String,
  question: {
    title: String,
    alternatives: {
      type: [ String ],
      default: null
    },
    correct_answer: String
  },
  content: {
    ref: String,
    file_name: String
  }
}, {
  _id: false,
  versionKey: false
})

const QuestlineSchema = new Schema({
  name: String,
  subject: String,
  start_at: Date,
  end_at: Date,
  active: Boolean,
  nodes: [ NodesSchema ]
}, {
  versionKey: false,
  timestamps: true,
  collection: 'questlines'
})

module.exports = mongoose.model('Questline', QuestlineSchema)
