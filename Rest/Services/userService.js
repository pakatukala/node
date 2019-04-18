const constants = require('../constants/constants')
const User = require('../Models/db/userModel')
const crudRepository = require('../database/crudRepository')
    module.exports.createUser = async (serviceData) => {
        let responseObj = {}
        try{
            const user = new User({
                firstName: serviceData.firstName,
                lastName: serviceData.lastName,
                city: serviceData.city,
                state: serviceData.state,
                hobbies: serviceData.hobbies
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

    module.exports.getCustomer = async (serviceData) => {
        let responseObj = {}
        try{
         
            let data = {
                query: {},
                model: user,
                excludeFields: '',
                pagination: {}

            }
            let responseFromDatabase = await crudRepository.find(data)
            switch(responseFromDatabase.status){
                case constants.databaseStatus.ENTITY_FETCHED:
                responseObj.body = responseFromDatabase.result
                responseObj.status = constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return responseObj
        }catch(err){
            console.log('Something went wrong in userService getCustomer', err)
            return responseObj = constants.responseObj
        }
        
    }

    