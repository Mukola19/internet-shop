const { Router } = require('express')
const Device = require('../controles/deviceControler')
const auth = require('../middleware/authMiddleware')
const roleCheck = require('../middleware/roleCheckMiddleware')
const receiptId = require('../middleware/receiptIdMiddleware')


const router = Router()


 

router.post('/',roleCheck({ admin: true }), Device.create)
router.get('/',receiptId, Device.getDevice)
router.get('/:id',receiptId, Device.getOneDevice)
router.post('/impression',auth, Device.addImpression)







module.exports = router