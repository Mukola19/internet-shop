const { Router } = require('express')
const Type = require('../controles/typeControler')

const router = Router()


router.post('/', Type.create)
router.get('/', Type.getType)





module.exports = router