const { Router } = require('express')
const Basket = require('../controles/basketControler')

const router = Router()


router.get('/', Basket.getBasket)
router.post('/', Basket.addDeviceInBasket)
// router.delete('/', Basket.remoweFromBasket)









module.exports = router