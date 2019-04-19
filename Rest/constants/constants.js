module.exports = {
    responseObj : {
        status: 500,
        message: 'Internal Server Error',
        body: {}
    },
    databaseStatus : {
        ENTITY_CREATED: 'Entity Created',
        ENTITY_MODIFIED: 'Entity Modified',
        ENTITY_FETCHED: 'Entity Fetched',
        ENTITY_DELETED: 'Entity Deleted',
        DATABASE_CONNECTED: 'Database Connected successfully',
        DATABASE_ERROR: 'Database Error'
    },
    controllerStatus: {
        BAD_REQUEST: 'Required Fields Missing'
    },
    serviceStatus: {
        USER_CREATED_SUCCESSFULLY: 'User Created Successfully',
        USER_LIST_FETCHED_SUCCESSFULLY: 'User list fetched Successfully',
        USER_FETCHED_SUCCESSFULLY: 'Single user fetched successfully',
        USER_UPDATED_SUCCESSFULLY: 'User updated Successfully',
        USER_DELETED_SUCCESSFULLY: 'User deleted Successfully'
    }
}