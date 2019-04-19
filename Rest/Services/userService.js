const constants = require('../constants/constants')
const User = require('../Models/db/userModel')
const mongoose = require('mongoose');
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
              query:{},
              model: User,
              excludeFields: ''
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
    
    module.exports.getCustomerList = async (serviceData) => {
        let responseObj = {}
        try{
            let data = {
              findQuery: {
                  _id: mongoose.Types.ObjectId(serviceData.userId)
              },
              model: User,
              excludeFields: ''
            }
            let responseFromDatabase = await crudRepository.find(data) 
            switch(responseFromDatabase.status){
                case constants.databaseStatus.ENTITY_FETCHED:
                responseObj.body = responseFromDatabase.result
                responseObj.status = constants.serviceStatus.USER_FETCHED_SUCCESSFULLY
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return responseObj
        }catch(err){
            console.log('Something went wrong in userService get single Customer', err)
            return responseObj = constants.responseObj
        }   
    }

    module.exports.updateCustomer = async (serviceData) => {
        let responseObj = {}
        try{
            let data = {
                findQuery: {
                    _id: mongoose.Types.ObjectId(serviceData.userId)
                },
                model: User,
                updateQuery: {}
              }
              if(serviceData.firstName){
                data.updateQuery.firstName = serviceData.firstName
            }
            if(serviceData.lastName){
                data.updateQuery.lastName = serviceData.lastName
            }
            if(serviceData.city){
                data.updateQuery.city = serviceData.city
            }
            if(serviceData.state){
                data.updateQuery.state = serviceData.state
            }
            if(serviceData.hobbies){
                data.updateQuery.hobbies = serviceData.hobbies
            }
            let responseFromDatabase = await crudRepository.findOneAndUpdate(data)
           
            switch(responseFromDatabase.status){
                case constants.databaseStatus.ENTITY_MODIFIED:
                responseObj.body = responseFromDatabase.result
                responseObj.status = constants.serviceStatus.USER_UPDATED_SUCCESSFULLY
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return responseObj
        }catch(err){
            console.log('Something went wrong in userService updateCustomer', err)
            return responseObj = constants.responseObj
        }  
    }

    module.exports.removeCustomer = async (serviceData) => {
        let responseObj = {}
        try{
            let data = {
                findQuery: {
                    _id: mongoose.Types.ObjectId(serviceData.userId)
                },
                model: User,
              }
            let responseFromDatabase = await crudRepository.findByIdAndRemove(data)
           
            switch(responseFromDatabase.status){
                case constants.databaseStatus.ENTITY_DELETED:
                responseObj.body = responseFromDatabase.result
                responseObj.status = constants.serviceStatus.USER_DELETED_SUCCESSFULLY
                break
                default:
                responseObj = constants.responseObj
                break
            }
            return responseObj
        }catch(err){
            console.log('Something went wrong in userService deletedCustomer', err)
            return responseObj = constants.responseObj
        }
        
    }

    
    