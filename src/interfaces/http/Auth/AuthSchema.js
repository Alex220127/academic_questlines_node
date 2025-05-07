const Joi = require('joi')

module.exports = {
  refreshTokenSchema: Joi.object({
    token: Joi.string().required(),
    refresh_token: Joi.string().required()
  }).required()
}
