const Joi = require('joi')

module.exports = {
  createQuestlineSchema: Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    start_at: Joi.date().required(),
    end_at: Joi.date().required(),
    active: Joi.boolean().optional().default(false),
    reward: Joi.number().required().allow(0),
    nodes: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required().valid('question', 'text', 'video'),
        question: Joi.when(
          'type',
          {
            is: 'question',
            then: Joi.object({
              title: Joi.string().required(),
              alternatives: Joi.array().items(Joi.string()).required().single(),
              correct_answer: Joi.string().required()
            }).required(),
            otherwise: Joi.forbidden()
          }
        ),
        content: Joi.when(
          'type',
          {
            is: 'question',
            then: Joi.forbidden(),
            otherwise: Joi.object({
              ref: Joi.string().optional(),
              file_name: Joi.string().optional()
            }).required()
          }
        )
      })
    ).single().required().min(1)
  }).required(),
  reportSchema: Joi.object({
    questline_id: Joi.string().hex().length(24).allow(null, '')
  }),
  questlineIdSchema: Joi.object({
    questline_id: Joi.string().hex().required()
  }).required(),
  paginateSchema: Joi.object({
    page: Joi.number().optional(),
    limit: Joi.number().optional()
  }).required(),
  headersSchema: Joi.object({
    authorization: Joi.string().required()
  }).required().unknown(),
}
