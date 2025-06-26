const saveItem = require('@use-cases/store-item/saveItem')
const getItems = require('@use-cases/store-item/getItems')
const updateItemById = require('@use-cases/store-item/updateItemById')
const deleteItemById = require('@use-cases/store-item/deleteItemById')
const getUserInventory = require('@use-cases/inventory/getUserInventory')
const getItemById = require('@use-cases/store-item/getItemById')
const createInventory = require('@use-cases/inventory/createInventory')
const getUserBalance = require('@use-cases/balance/getUserBalance')
const updateBalance = require('@use-cases/balance/updateBalance')
const addItemToUserInventory = require('@use-cases/inventory/addItemToUserInventory')

exports.createStoreItem = async (req, res) => {
  const { body } = req

  await saveItem.execute(body)

  return res.status(201).json(body)
}

exports.getStoreItems = async (_, res) => {
  const items = await getItems.execute()

  return res.status(200).json(items)
}

exports.updateItem = async (req, res) => {
  const { params: { item_id }, body } = req

  await updateItemById.execute(item_id, { $set: body })

  return res.status(204).send()
}

exports.deleteItem = async (req, res) => {
  const { params: { item_id } } = req

  await deleteItemById.execute(item_id)

  return res.status(204).send()
}

exports.redeemItem = async (req, res) => {
  const { params: { item_id }, body: { user_id } } = req

  let inventory = await getUserInventory.execute(user_id)
  if (!inventory) {
    inventory = await createInventory.execute({ user_id })
  }

  const item = await getItemById.execute(item_id)

  if (!item || !item.active) {
    return res.status(400).send('item_inactive')
  }

  if (item.redeem_limit && item.total_redeemed >= item.redeem_limit) {
    return res.status(400).send('redeem_limit_reached')
  }

  const balance = await getUserBalance.execute(user_id)

  if (!balance || balance.balance < item.price) {
    return res.status(403).send('insuficient_funds')
  }

  const alreadyInInventory = inventory.items.find(i => String(i._id) === item_id)

  if (alreadyInInventory) {
    return res.status(409).send('item_already_in_inventory')
  }

  await updateBalance.execute({ user: user_id, value: item.price, operation: 'subtract' })

  item.redeemed_at = new Date()
  await addItemToUserInventory.execute(user_id, item)

  if (item.redeem_limit) {
    await updateItemById.execute(item_id, { $inc: { total_redeemed: 1 }})
  }

  return res.status(204).send()
}
