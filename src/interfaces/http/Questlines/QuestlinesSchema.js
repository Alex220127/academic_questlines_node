const Joi = require('joi')

module.exports = {
  createQuestlineSchema: Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    start_at: Joi.date().required(),
    end_at: Joi.date().required(),
    active: Joi.boolean().optional().default(false),
    nodes: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required().valid('question', 'text', 'video'),
        reward: Joi.number().optional(),
        question: Joi.when(
          'type',
          {
            is: 'question',
            then: Joi.object({
              title: Joi.string().required(),
              alternatives: Joi.array().items(Joi.string()).required().single(),
              correct_answer: Joi.string().required()
            }),
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
  questlineIdSchema: Joi.object({
    questline_id: Joi.string().hex().required()
  }).required(),
  paginateSchema: Joi.object({
    page: Joi.number().required(),
    limit: Joi.number().required()
  }).required()
}
