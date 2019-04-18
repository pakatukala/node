const constants = require('../constants/constants')
const User = require('../Models/db/userModel')
const crudRepository = require('../database/crudRepository')
    module.exports.createUser = async (serviceData) => {
        let responseObj = {}
        try{
            const user = new User({
                name: serviceData.name,
                phone: serviceData.phone,
                password: serviceData.password
            })

            let data = {
                model: user
            }
            let responseFromDatabase = await crudRepository.insertData(data)
            switch(responseFromDatabase.status){
                case constants.databaseStatus.ENTITY_CREATED:
                responseObj.body = responseFromDatabase.result
                responseObj.status = constants.serviceStatus.USER_CREATED_SUCCESSFULLY
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return responseObj
        }catch(err){
            console.log('Something went wrong in userService createUser', err)
            return responseObj = constants.responseObj
        }
        
    }