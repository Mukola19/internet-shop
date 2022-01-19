const { Router } = require('express')
const Basket = require('../controles/basketControler')
const auth = require('../middleware/authMiddleware')


const router = Router()


router.get('/',auth, Basket.getBasket)
router.post('/',auth, Basket.addDeviceInBasket)
router.delete('/:id',auth, Basket.remoweFromBasket)
router.put('/counter',auth, Basket.changeCount)








module.exports = router