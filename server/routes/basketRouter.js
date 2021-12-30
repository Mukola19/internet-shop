const { Router } = require('express')
const Basket = require('../controles/basketControler')

const router = Router()


router.get('/', Basket.getBasket)









module.exports = router