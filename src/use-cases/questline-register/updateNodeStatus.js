const QuestlineRegisterRepository = require('@repositories/questlineRegisterRepository')
const questlineRegisterRepository = QuestlineRegisterRepository.getInstance()

exports.execute = async (params) => {
  const query = {
    _id: params.register_id,
    'nodes._id': params.node_id
  }

  const update = {
    $set: {
      'nodes.$.status': params.status
    }
  }

  return questlineRegisterRepository.update(query, update)
}
