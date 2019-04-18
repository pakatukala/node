const Joi = require('joi')
const createUserSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    hobbies: Joi.string().required()
})

module.exports = 
{
    'createUserSchema': createUserSchema
}