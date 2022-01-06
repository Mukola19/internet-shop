const { Router } = require('express')
const Device = require('../controles/deviceControler')
const auth = require('../middleware/authMiddleware')
const roleCheck = require('../middleware/roleCheckMiddleware')


const router = Router()


 

router.post('/',roleCheck({ admin: true }), Device.create)
router.get('/', Device.getDevice)
router.get('/:id', Device.getOneDevice)








module.exports = router