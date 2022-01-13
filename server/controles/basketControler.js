const basketService = require("../service/basket-service")




class BasketControler {
  async getBasket(req, res,next) {
    try {
      
    } catch (e) {
      console.log(e)
    }
  }



  async addDeviceInBasket (req, res, next) {
    try {
      const { deviceId } = req.body
      const device = await basketService.addInBasket(deviceId, req.user.id)
      res.json(device)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new BasketControler()
