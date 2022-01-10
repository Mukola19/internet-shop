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
router.post('/logout',auth, User.logout)
router.post('/raising_admin',auth, User.raisingAdmin)
router.get('/activate/:link', User.activate)
router.get('/refresh',auth, User.refresh)




module.exports = router