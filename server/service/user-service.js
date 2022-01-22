const { User, Basket, Roles } = require('../models/models')
const ApiError = require('../error/ApiError')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const { hash, compare } = require('bcryptjs')
const { v4 } = require('uuid')

class UserService {


  async registration(email, password) {
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      throw new Error('Такий користувач вже існує')
    }

    const hashPassword = await hash(password, 5)
    const activationLink = v4()

    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    })
    await Basket.create({ userId: user.id })
    const roles = await Roles.create({ userId: user.id })

    await mailService.sendActivationLink(
      email,
      process.env.API_URL + '/api/user/activate/' + activationLink
    )
    user.roles = roles
    const userDto = new UserDto(user) // id, email, roles, isActivation

    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } })
    if (!user) {
      throw new Error('Ops')
    }
    await User.update({ isActivated: true }, { where: { activationLink } })
  }

  async login(email, password) {
    const user = await User.findOne({
      where: { email },
    })
    if (!user) {
      throw new Error('Такого користувача не існує')
    }

    const hashPass = await compare(password, user.password)
    if (!hashPass) {
      throw new Error('Ведені не вірні дані')
    }

    const roles = await Roles.findOne({ where: { userId: user.id } })
    user.roles = roles
    const userDto = new UserDto(user) // id, email, role, isActivation
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)
    return { ...tokens, user: userDto }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }

    const userData = tokenService.validateRefreshToken(refreshToken)
    const token = await tokenService.findToken(refreshToken)

    if (!userData || !token) {
      throw ApiError.UnauthorizedError()
    }
    const user = await User.findOne({ where: { id: userData.id } })
    const roles = await Roles.findOne({ where: { userId: user.id } })
    user.roles = roles
    const userDto = new UserDto(user) // id, email, role, isActivation
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async raisingAdmin(codeKey, user) {
    if (codeKey === process.env.SECRET_CODE_KEY) {
      const data = await Roles.update({ admin: true }, { where: { userId: user.id } })
      user.admin = true
      const tokens = tokenService.generateTokens({ ...user })
      await tokenService.saveToken(user.id, tokens.refreshToken)
      return { ...tokens, user }
    }
  }
}

module.exports = new UserService()
