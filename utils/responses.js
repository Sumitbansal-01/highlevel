module.exports.successResponse = (data) => {
    return {
        message: "success",
        data
    }
}

module.exports.failedResponse = (errorMessage) => {
    return {
        message: "failed",
        errorMessage
    }
}
