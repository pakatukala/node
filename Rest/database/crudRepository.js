const mongoose = require('mongoose');
const constants = require('../constants/constants')
module.exports.createConnection = () => {
    //this will return a promise Async Await

    return new Promise((resolve, reject) =>  {
            let responseObj = {}
            mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (err) => {
                if(err){
                    responseObj.status = constants.databaseStatus.DATABASE_ERROR;
                    console.log("responseObj", responseObj);
                    return reject(responseObj)
                }else{
                    responseObj.status = constants.databaseStatus.DATABASE_CONNECTED;
                    console.log("responseObj", responseObj);
                    return resolve(responseObj)
                }
            })
    })
}

module.exports.insertData = (data) => {
    return new Promise((resolve, reject) => {
            try{
                    data.model.save().then(docs => {
                        resolve({
                            result: docs,
                            status: constants.databaseStatus.ENTITY_CREATED
                        })
                    }).catch(err =>{
                        reject({
                            error: err.message,
                            status: constants.databaseStatus.DATABASE_ERROR
                        })
                    })
            }catch(err){
                console.log("Something went wrong in the crudRepository : insert Data", err)
            }
    })
}

module.exports.find = (data) => {
    return new Promise((resolve, reject) => {
        try{
                data.model.find(data.qurey, data.excludeFields, data.pagination).then(docs => {
                    resolve({
                        result: docs,
                        status: constants.databaseStatus.ENTITY_FETCHED
                    })
                }).catch(err =>{
                    reject({
                        error: err.message,
                        status: constants.databaseStatus.DATABASE_ERROR
                    })
                })
        }catch(err){
            console.log("Something went wrong in the crudRepository : find Data", err)
        }
})
}

module.exports.findOneAndUpdate = (data) => {
    return new Promise((resolve, reject) => {
        try{
                data.model.findOneAndUpdate(data.findQuery, data.updateQuery).then(docs => {
                    resolve({
                        result: docs,
                        status: constants.databaseStatus.ENTITY_MODIFIED
                    })
                }).catch(err =>{
                    reject({
                        error: err.message,
                        status: constants.databaseStatus.DATABASE_ERROR
                    })
                })
        }catch(err){
            console.log("Something went wrong in the crudRepository : findOneAndUpdate Data", err)
        }
})
}

module.exports.findByIdAndRemove = (data) => {
    return new Promise((resolve, reject) => {
        try{
                data.model.findByIdAndRemove(data.findQuery).then(docs => {
                    resolve({
                        result: docs,
                        status: constants.databaseStatus.ENTITY_DELETED
                    })
                }).catch(err =>{
                    reject({
                        error: err.message,
                        status: constants.databaseStatus.DATABASE_ERROR
                    })
                })
        }catch(err){
            console.log("Something went wrong in the crudRepository : findOneAndDelete Data", err)
        }
})
}