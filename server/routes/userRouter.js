const { Router } = require('express')
const User = require('../controles/userControler')
const auth = require('../middleware/authMiddleware')
const { body } = require('express-validator')

const router = Router()

const validator = [ 
    body('password')
   .isLength({ min: 2 , max: 32}),
   body('email')
   .isEmail()
]


router.post('/registration', ...validator,User.registration)
router.post('/login',...validator, User.login)
router.post('/logout', User.logout)
router.get('/activate/:link', User.activate)
router.get('/refresh', User.refresh)
router.get('/users', User.users)




module.exports = router