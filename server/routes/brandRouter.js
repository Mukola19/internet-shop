const { Router } = require('express')
const Brand = require('../controles/brandControler')

const router = Router()


router.post('/', Brand.create)
router.get('/', Brand.getBrand)





module.exports = router