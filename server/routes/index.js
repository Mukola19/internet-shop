const { Router } = require('express')

const router = Router()



router.use('/user', require('./userRouter'))
router.use('/basket', require('./basketRouter'))
router.use('/type', require('./typeRouter'))
router.use('/brand', require('./brandRouter'))
router.use('/device', require('./deviceRouter'))




module.exports = router