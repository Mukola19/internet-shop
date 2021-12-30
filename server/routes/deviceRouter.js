const { Router } = require('express')
const Device = require('../controles/deviceControler')

const router = Router()




router.post('/', Device.create)
router.get('/', Device.getDevice)
router.get('/:id', Device.getOneDevice)








module.exports = router