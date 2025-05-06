const Joi = require('joi')

module.exports = {
  createStoreItem: Joi.object({
    name: Joi.string().required(),
    icon: Joi.string().required(),
    price: Joi.number().required(),
    active: Joi.boolean().required(),
    redeem_limit: Joi.number().optional()
  }).required(),
  updateStoreItem: Joi.object({
    name: Joi.string().optional(),
    icon: Joi.string().optional(),
    price: Joi.number().optional(),
    active: Joi.boolean().optional(),
    redeem_limit: Joi.number().optional()
  }).required(),
  redeemSchema: Joi.object({
    user_id: Joi.string().hex().required()
  }).required(),
  itemIdSchema: Joi.object({
    item_id: Joi.string().hex().required()
  }).required()
}
