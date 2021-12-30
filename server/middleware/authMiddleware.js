const ApiError = require('../error/ApiError')
const { verify } = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.err(401, 'Не авторизований'))
        }

        const decoded = verify(token, process.env.SECRET_JWT)

        req.user = decoded
        next()


    } catch (e) {
        next(ApiError.err(401, 'Не авторизований'))
    }

}