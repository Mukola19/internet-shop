const { Router } = require('express')
const Type = require('../controles/typeControler')
const auth = require('../middleware/authMiddleware')
const roleCheck = require('../middleware/roleCheckMiddleware')

const router = Router()


router.post('/', roleCheck({ admin: true }) ,Type.create)
router.get('/', Type.getTypes)





module.exports = router