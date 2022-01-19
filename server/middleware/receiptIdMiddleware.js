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
      req.user = {}
      return next()
    }

    const decoded = tokenService.validateAccessToken(token)
    if (!decoded) {
      req.user = {}
      return next()
    }

    req.user = decoded
    next()
  } catch (e) {
    next(ApiError.UnauthorizedError())
    console.error(e);
  }
}