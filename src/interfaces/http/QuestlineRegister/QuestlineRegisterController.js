const getShortLink = require('@use-cases/short-link/getShortLink')
const getQuestline = require('@use-cases/questline/getQuestline')
const getQuestlineRegister = require('@use-cases/questline-register/getQuestlineRegister')
const listQuestlineRegister = require('@use-cases/questline-register/listQuestlineRegister')
const saveQuestlineRegister = require('@use-cases/questline-register/saveQuestlineRegister')
const updateQuestlineRegister = require('@use-cases/questline-register/updateQuestlineRegister')
const updateNodeStatus = require('@use-cases/questline-register/updateNodeStatus')

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

exports.updateNodeStatus = async (req, res) => {
  const { params, body, credentials } = req

  const register = await updateNodeStatus.execute({ ...params, ...body, ...credentials, mode: 'find_and_update' })

  if (!register) {
    return res.status(204).send()
  }

  const allCompleted = register.nodes.every(node => node.status === 'completed')

  if (allCompleted) {
    const query = { _id: params.register_id }
    const update = { $set: { status: 'completed', completed_at: new Date() } }

    await updateQuestlineRegister.execute({ query, update })
  }

  return res.status(204).send()
}

exports.getMyRegisters = async (req, res) => {
  const { credentials: { user_id } } = req

  const registers = await listQuestlineRegister.execute({ user_id }, { questline: 1, status: 1, createdAt: 1, 'nodes.status': 1 })

  registers.forEach(register => {
    const totalNodes = register.nodes.length
    const completed = register.nodes.filter(node => node.status === 'completed').length

    register.questline.progress = completed > 0 ? Math.round((completed / totalNodes) * 100) : 0
  })

  return res.status(200).json(registers)
}

exports.getRegister = async (req, res) => {
  const { params: { register_id }, credentials: { user_id } } = req

  const register = await getQuestlineRegister.execute({ _id: register_id, user_id })

  return res.status(200).json(register)
}
