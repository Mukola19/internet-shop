const { Router } = require('express')
const User = require('../controles/userControler')
const auth = require('../middleware/authMiddleware')

const router = Router()



router.post('/registration', User.registration)
router.post('/login', User.login)
router.post('/logout', User.logout)
router.get('/activate/:link', User.activate)
router.get('/refresh', User.refresh)
router.get('/users', User.users)




module.exports = router