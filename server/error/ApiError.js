class ApiError extends Error {
  constructor(status, message) {
    super()
    this.status = status
    this.message = message
  }

  static err(status, message) {
    return new ApiError(status, message)
  }

  static UnauthorizedError(message) {
    return new ApiError(401, 'Не авторизовані')
  }
}

module.exports = ApiError
