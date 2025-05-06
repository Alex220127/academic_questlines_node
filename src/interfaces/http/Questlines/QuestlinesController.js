const createQuestline = require('@use-cases/questline/createQuestline')
const getQuestlines = require('@use-cases/questline/getAllQuestlines')
const countQuestlines = require('@use-cases/questline/countQuestlines')
const paginate = require('@use-cases/pagination/paginate')

exports.createQuestline = async (req, res) => {
  const { body } = req

  const questline = await createQuestline.execute(body)

  return res.status(201).send(questline)
}

exports.getQuestlines = async (req, res) => {
  const { query } = req

  const count = await countQuestlines.execute(query)
  const questlines = await getQuestlines.execute(query)

  const response = paginate.execute(query.page, query.limit, count, questlines)

  return res.status(200).send(response)
}
