const constants = require('../constants/constants')
const Joi = require('joi')
let responseObj = {}

module.exports = {
    valdateBody: (schema) => {
return(req, res, next) => {
    const result = Joi.validate(req.body, schema)
    if(result.error) {
        console.log('Result Error', result.error)
       let errorDetails = result.error.details.map((value) => {
            return {
                error: value.message,
                path: value.path
            }
        })
        responseObj.status = 400
        responseObj.message =  constants.controllerStatus.BAD_REQUEST
        responseObj.body = errorDetails
        return res.status(responseObj.status).send(responseObj)
    }else {
        next()
    }
}
    } 
}