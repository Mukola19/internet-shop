const { Router } = require('express')
const User = require('../controles/userControler')

const router = Router()



router.post('/registration', User.registration)
router.post('/login', User.login)
router.get('/auth', User.chackAuth)




module.exports = router