const ApiError = require('../error/ApiError')
const userService = require('../service/user-service')

class UserControler {

    async registration(req, res) {
        try {
            const { email, password, role } = req.body

            const userData = await userService.registration(email, password, role)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(userData)

        } catch (e) {
            next(e)


        }



    }


    async login(req, res) {

        try {
            const { email, password, role } = req.body


            res.status(201).json({})
        } catch (e) {
            next(e)

        }

    }




    async logout(req, res) {
        try {

        } catch (e) {
            next(e)

        }

    }



    // async chackAuth(req, res, next) {
    //     const { id, email, role } = req.user
    //     const toket = sign({ id, email, role }, process.env.SECRET_JWT, { expiresIn: '24h' })

    //     res.json({ toket })

    // }

    async users(req, res, next) {
        try {

        } catch (e) {
            next(e)

        }
    }


    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)

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
}


module.exports = new UserControler()