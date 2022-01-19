const basketService = require("../service/basket-service")


class BasketControler {
  async getBasket(req, res,next) {
    try {
      const devices = await basketService.getBasket(req.user.id)
      res.json(devices)
    } catch (e) {
      console.log(e)
    }
  }



  async addDeviceInBasket (req, res, next) {
      const { deviceId } = req.body
      const device = await basketService.addInBasket(deviceId, req.user.id)
      res.json(device)
 
  }

  async changeCount (req, res, next) {
    try {
      const { mark , deviceId } = req.body
      const count = await basketService.changeCount( mark, deviceId, req.user.id)
      res.json(count)
    } catch (e) {
      console.log(e)
    }
  }

  async remoweFromBasket (req, res, next) {
    try {
     const data = await basketService.remoweFromBasket(req.params.id, req.user.id)
      res.json(data)
    } catch (e) {
      console.log(e)
    }
  }
  

  
}

module.exports = new BasketControler()
