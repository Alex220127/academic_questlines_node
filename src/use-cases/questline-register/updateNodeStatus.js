const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

exports.execute = async (params) => {
  const query = {
    _id: params.register_id,
    'nodes._id': params.node_id
  }

  const update = {
    $set: {
      'nodes.$.status': params.status,
      'nodes.$.updated_at': new Date()
    }
  }

  if (params.mode === 'update') {
    return questlineRegisterRepository.update(query, update)
  }

  const options = {
    new: true,
    lean: true
  }

  return questlineRegisterRepository.findOneAndUpdate(query, update, options)
}
