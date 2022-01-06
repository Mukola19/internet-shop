const { sign, verify } = require('jsonwebtoken')
const { Token } = require('../models/models')

class TokenService {
  generateTokens({isActivation,...payload}) {
    const accessToken = sign(payload, process.env.SECRET_ACCESS_JWT, {
      expiresIn: '30m',
    })
    const refreshToken = sign(payload, process.env.SECRET_REFRESH_JWT, {
      expiresIn: '30d',
    })
    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId } })

    if (tokenData) {
      return await Token.update({ refreshToken }, { where: { userId } })
    }

    const token = Token.create({ userId, refreshToken })
    return token
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({
      where: { refreshToken },
      force: true,
    })
    return tokenData
  }

  validateRefreshToken(token) {
    try {
      const dataToken = verify(token, process.env.SECRET_REFRESH_JWT)
      return dataToken
    } catch (e) {
      return null
    }
  }

  validateAccessToken(token) {
    try {
      const dataToken = verify(token, process.env.SECRET_ACCESS_JWT)
      return dataToken
    } catch (e) {
      return null
    }
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } })
    return tokenData
  }
}

module.exports = new TokenService()

// SECRET_REFRESH_JWT
