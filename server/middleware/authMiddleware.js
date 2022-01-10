const ApiError = require('../error/ApiError')
const { verify } = require('jsonwebtoken')
const tokenService = require('../service/token-service')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return next(ApiError.UnauthorizedError())
    }

    const decoded = tokenService.validateAccessToken(token)
    if (!decoded) {
      next(ApiError.UnauthorizedError())
    }

    req.user = decoded
    next()
  } catch (e) {
    next(ApiError.UnauthorizedError())
    console.error(e);
  }
}
