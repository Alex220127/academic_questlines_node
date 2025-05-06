const QuestlineRepository = require('@repositories/questlineRepository')
const questlineRepository = new QuestlineRepository()

exports.execute = async (opt) => {
  const query = {}
  const projection = {}

  const skip = (opt.page - 1) * opt.limit
  const options = {
    sort: {
      createdAt: -1
    },
    skip,
    limit: opt.limit
  }

  return questlineRepository.list(query, projection, options)
}
