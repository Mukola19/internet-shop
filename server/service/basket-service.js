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
      return ApiError.err("Корзина пуста")
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
      return ApiError.err("Ops")
    }

    const data = await BasketDevice.create({ deviceId, basketId })

    const device = await Device.findOne({ where: { id: deviceId } })

    const basketDevice = new BasketDto({ device, ...data })

    return basketDevice
  }

  async changeCount(mark, deviceId, basketId) {
    let basketDevice = await BasketDevice.findOne({
      where: { deviceId, basketId },
    })
    if (!basketDevice) {
      return ApiError.err("Ops")
    }
    if (basketDevice.count + mark < 1) {
      return ApiError.err("Некоретні дані")
    }

    await BasketDevice.update(
      { count: (basketDevice.count += mark) },
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
