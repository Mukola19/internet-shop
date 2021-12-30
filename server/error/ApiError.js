class ApiError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static err(status, message) {
        return new ApiError(status, message)
    }

}

module.exports = ApiError