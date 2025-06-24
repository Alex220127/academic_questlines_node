const Joi = require('joi')

module.exports = {
  shortCodeSchema: Joi.object({
    short_code: Joi.string().required()
  }).required(),
  headersSchema: Joi.object({
    authorization: Joi.string().required()
  }).required().unknown(),
  nodeRegisterIdSchema: Joi.object({
    register_id: Joi.string().hex().required(),
    node_id: Joi.string().hex().required()
  }).required(),
  registerIdSchema: Joi.object({
    register_id: Joi.string().hex().required()
  }).required(),
  updatRegisterNodeSchema: Joi.object({
    status: Joi.string().required().valid('pending', 'completed')
  }).required()
}
