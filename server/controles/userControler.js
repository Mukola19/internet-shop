const { User, Basket } = require('../models/models')
const ApiError = require('../error/ApiError')
const { hash, compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class UserControler {

    async registration(req, res) {
        const { email, password, role } = req.body

        const candidate = await User.findOne({ where: { email } })
        if (candidate) return res.json({ message: 'Такий користувач вже існує' })
        const hashPassword = await hash(password, 5)

        const user = await User.create({ email, password: hashPassword, role })
        const basket = await Basket.create({ userId: user.id })

        const toket = sign({ id: user.id, email, role }, process.env.SECRET_JWT, { expiresIn: '24h' })


        res.status(201).json({ toket })



    }


    async login(req, res) {
        const { email, password, role } = req.body

        const user = await User.findOne({ where: { email } })
        const comparePassword = compareSync(password, user.password, 5)
        if (!comparePassword) {
            return next(ApiError.err(422, "Пароль не вірний"))
        }

        const toket = sign({ id: user.id, email, role }, process.env.SECRET_JWT, { expiresIn: '24h' })


        res.status(201).json({ toket })






    }

    async chackAuth(req, res, next) {
        const { id, email, role } = req.user
        const toket = sign({ id, email, role }, process.env.SECRET_JWT, { expiresIn: '24h' })

        res.json({ toket })

    }


}


module.exports = new UserControler()