const ApiError = require('../error/ApiError')
const { verify } = require('jsonwebtoken')
const tokenService = require('../service/token-service')

module.exports = ({ admin }) => (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
      if(admin) {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
           next(ApiError.UnauthorizedError())
        }
    
        const decoded = tokenService.validateAccessToken(token)
        if (!decoded.admin) {
              next(ApiError.err(403, 'Немає доступа'))
        }
    
        req.user = decoded
        next()
      } 
   
  } catch (e) {
    next(ApiError.UnauthorizedError())
  }
}
