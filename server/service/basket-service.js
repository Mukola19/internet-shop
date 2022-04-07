const BasketDto = require("../dtos/basket-dto")
const ApiError = require("../error/ApiError")
const { BasketDevice, Device } = require("../models/models")

class BasketService {
  async getBasket(basketId) {
    const basket = await BasketDevice.findAll({
      where: { basketId },
      include: Device,
    })
    if (!basket) {
      throw ApiError.err("Корзина пуста")
    }
    const array = basket.map((b) => {
      return new BasketDto(b)
    })

    return array
  }

  async addInBasket(deviceId, basketId) {
    const candidate = await BasketDevice.findAll({
      where: { deviceId, basketId },
    })
    if (!candidate) {
      throw ApiError.err("Ops")
    }

    const data = await BasketDevice.create({ deviceId, basketId })

    const device = await Device.findOne({ where: { id: deviceId } })

    const basketDevice = new BasketDto({ device, ...data })

    return basketDevice
  }

  async changeCount(newCount, deviceId, basketId) {
    let basketDevice = await BasketDevice.findOne({
      where: { deviceId, basketId },
    })
    if (!basketDevice) {
      throw ApiError.err("Ops")
    }
    if (newCount < 1 ) {
      throw ApiError.err("Некоретні дані")
    }

    await BasketDevice.update(
      { count: newCount },
      { where: { deviceId, basketId } }
    )

    return basketDevice
  }


  async remoweFromBasket(deviceId, basketId) {
    await BasketDevice.destroy({
      where: { deviceId, basketId },
      force: true,
    })
    return { resultCode: 0 }
  }
}

module.exports = new BasketService()
