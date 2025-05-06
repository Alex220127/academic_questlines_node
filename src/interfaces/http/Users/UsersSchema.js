const Joi = require('joi')

module.exports = {
  createUserSchema: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
  }).required(),
  userIdSchema: Joi.object({
    user_id: Joi.string().hex().required()
  }).required(),
  loginSchema: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  }).required()
}
