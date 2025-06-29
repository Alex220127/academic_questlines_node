const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

const { mongo: { ObjectId } } = require('mongoose')

exports.execute = async (teacher, questline) => {
  const match = {
    $match: {
      'questline.created_by': teacher
    }
  }

  if (questline && questline !== '') {
    match.$match['questline._id'] = ObjectId.createFromHexString(questline)
  }

  const group = {
    $group: {
      _id: '$questline._id',
      name: { $first: '$questline.name' },
      count: { $sum: 1 },
      completed: {
        $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
      },
      in_progress: {
        $sum: { $cond: [{ $eq: ['$status', 'in_progress'] }, 1, 0] }
      },
      students: { $push: '$$ROOT' }
    }
  }

  const pipelines = [ match, group ]

  return questlineRegisterRepository.aggregate(pipelines)
}

