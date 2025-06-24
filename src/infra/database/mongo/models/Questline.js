const mongoose = require('mongoose')

const { Schema } = mongoose

const NodesSchema = new Schema({
  name: String,
  reward: Number,
  type: String,
  question: {
    title: String,
    alternatives: [ String ],
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
  reward: Number,
  completedAt: Date,
  nodes: [ NodesSchema ]
}, {
  versionKey: false,
  timestamps: true,
  collection: 'questlines'
})

module.exports = mongoose.model('Questline', QuestlineSchema)
