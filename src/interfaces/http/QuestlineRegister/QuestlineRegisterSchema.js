const Joi = require('joi')

module.exports = {
  shortCodeSchema: Joi.object({
    short_code: Joi.string().required()
  }).required()
}
