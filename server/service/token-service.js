const { sign } = require("jsonwebtoken");
const { Token } = require("../models/models");

class TokenService {
  generateTokens(payload) {
    const accessToken = sign(payload, process.env.SECRET_ACCESS_JWT, {
      expiresIn: "30m",
    });
    const refreshToken = sign(payload, process.env.SECRET_REFRESH_JWT, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId } });

    if (tokenData) {
      return await Token.update({ refreshToken }, { where: { userId } });
    }

    const token = Token.create({ userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();

// SECRET_REFRESH_JWT
