const constants = require('../constants/constants')
const userService = require('../Services/userService')
module.exports.createUser = async (req, res, next) => {
    let responseObj = {}
    try{

        let data = req.body
            console.log("req body", data)
            let responseFromService = await userService.createUser(data)
            switch(responseFromService.status){
                case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break
                default:
                    responseObj = constants.responseObj
                break
            }

          return  res.status(responseObj.status).send(responseObj)
    }catch(err){
        console.log("Something went wrong in the controller", err)
        responseObj = constants.responseObj
        return  res.status(responseObj.status).send(responseObj)

    }
}

module.exports.getCustomer = async (req, res, next) => {
    let responseObj = {}
    try{
            let data = {}
            let responseFromService = await userService.getCustomer(data)
            switch(responseFromService.status){
                case constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break
                default:
                    responseObj = constants.responseObj
                break
            }

          return  res.status(responseObj.status).send(responseObj)
    }catch(err){
        console.log("Something went wrong in the controller get userlist", err)
        responseObj = constants.responseObj
        return  res.status(responseObj.status).send(responseObj)

    }
}