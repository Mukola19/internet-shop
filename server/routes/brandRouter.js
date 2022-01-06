const { Router } = require('express')
const Brand = require('../controles/brandControler')
const auth = require('../middleware/authMiddleware')
const roleCheck = require('../middleware/roleCheckMiddleware')


const router = Router()


router.post('/',roleCheck({ admin: true }), Brand.create)
router.get('/', Brand.getBrands)





module.exports = router