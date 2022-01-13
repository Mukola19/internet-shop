const ApiError = require("../error/ApiError");
const { BasketDevice, Device } = require("../models/models")




class BasketService {
  async addInBasket(deviceId, basketId) {
    const candidate = await BasketDevice.findOne({ where: { deviceId, basketId } })
    if (!candidate) {
        return ApiError.err('Ops')
    }

    const data = await BasketDevice.create({ deviceId, basketId })
    
    const device = await Device.findOne({ where: {id: deviceId } })

    return {
        ...device,
        coutn: data.coutn
    }



  }
}

module.exports = new BasketService();
