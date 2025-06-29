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
  },
  status: {
    type: String,
    enum: [ 'completed', 'pending' ],
    default: 'pending'
  },
  updated_at: Date
}, {
  versionKey: false
})

const QuestlineRegisterSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  user_name: String,
  user_email: String,
  questline: {
    _id: Schema.Types.ObjectId,
    name: String,
    subject: String,
    start_at: Date,
    end_at: Date,
    active: Boolean,
    reward: Number,
    created_by: Schema.Types.ObjectId
  },
  completedAt: Date,
  nodes: [ NodesSchema ],
  status: String
}, {
  versionKey: false,
  collection: 'questline_register',
  timestamps: true
})

QuestlineRegisterSchema.index({ user_id: 1, 'questline._id': 1 })

module.exports = mongoose.model('QuestlineRegister', QuestlineRegisterSchema)
