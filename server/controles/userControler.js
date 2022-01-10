const ApiError = require('../error/ApiError')
const userService = require('../service/user-service')
const { validationResult } = require('express-validator')

class UserControler {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty) {
        next(ApiError.err(400, ' Помилка при валідації', errors.array))
      }

      const { email, password } = req.body
      const userData = await userService.registration(email, password)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json(userData)
    } catch (e) {
      // next(e)
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        next(ApiError.err(400, ' Помилка при валідації', errors.array))
      }

      const { email, password } = req.body

      const userData = await userService.login(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      res.json(userData)
    } catch (e) {
      // next(e)    
      console.log(e);  
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await userService.logout(refreshToken)
      res.clearCookie('refreshToken')
      return res.json({ token })
    } catch (e) {
      next(e)
    }
  }

 

  async refresh(req, res, next) {
    try {
      const { refreshToken }= req.cookies
      const userData = await userService.refresh(refreshToken)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(userData)
    } catch (e) {
      next(e)
      // res.json({e})
      // console.log(e)
    }
  }

  async activate(req, res, next) {
    try {
      const { link } = req.params
      await userService.activate(link)
      return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
      next(e)
    }
  }





  async raisingAdmin (req, res, next) {
    try {
      const { codeKey } = req.body
      const data = await userService.raisingAdmin(codeKey, req.user)
      res.json(data)
    } catch (e) {
      // next(e)
      console.log(e);
    }
  }
}

module.exports = new UserControler()
