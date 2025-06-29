const createQuestline = require('@use-cases/questline/createQuestline')
const getQuestlines = require('@use-cases/questline/getAllQuestlines')
const countQuestlines = require('@use-cases/questline/countQuestlines')
const generateShortLink = require('@use-cases/short-link/generateShortLink')
const saveShareLink = require('@use-cases/short-link/saveShortLink')
const getShortLink = require('@use-cases/short-link/getShortLink')
const paginate = require('@use-cases/pagination/paginate')

exports.createQuestline = async (req, res) => {
  const { body, credentials: { user_id } } = req

  const questline = await createQuestline.execute({ ...body, created_by: user_id })

  return res.status(201).send(questline)
}

exports.getQuestlines = async (req, res) => {
  const { query, credentials } = req

  if (credentials.scope === 'admin') {
    query.created_by = credentials.user_id
  }

  const questlines = await getQuestlines.execute(query)

  return res.status(200).send(questlines)
}

exports.shareLink = async (req, res) => {
  const { params: { questline_id } } = req

  const { link, short_code } = generateShortLink.execute({ questline_id })

  const shortLink = await getShortLink.execute({ short_code })

  if (shortLink) {
    return res.status(200).json({ short_code })
  }

  await saveShareLink.execute({ short_code, document_id: questline_id })

  return res.status(200).json({ short_code })
}
