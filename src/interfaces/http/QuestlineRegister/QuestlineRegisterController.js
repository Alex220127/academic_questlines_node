const getShortLink = require('@use-cases/short-link/getShortLink')
const getQuestline = require('@use-cases/questline/getQuestline')
const getQuestlineRegister = require('@use-cases/questline-register/getQuestlineRegister')
const saveQuestlineRegister = require('@use-cases/questline-register/saveQuestlineRegister')

exports.joinToQuestline = async (req, res) => {
  const { body: { short_code }, credentials: { user_id } } = req

  const link = await getShortLink.execute({ short_code })

  if (!link) {
    return res.status(404).send('link_not_found')
  }

  const questline = await getQuestline.execute({ _id: link.document_id })

  if (!questline) {
    return res.status(404).send('questline_not_found')
  }

  const questlineRegister = await getQuestlineRegister.execute({ user_id, 'questline._id': questline._id }, { _id: 1 })

  if (questlineRegister) {
    return res.status(409).send('already_registered')
  }

  const questlineRegisterData = {
    user_id,
    questline,
    nodes: questline.nodes,
    status: 'in_progress'
  }

  await saveQuestlineRegister.execute(questlineRegisterData)

  return res.status(204).send()
}
