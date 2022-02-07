const DeviceAllDto = require('../dtos/deviceAllDto')
const ImpressionDto = require('../dtos/impressionDto')
const ApiError = require('../error/ApiError')
const { Device, Impression } = require('../models/models')

class ImpressionService {
  async addImpression({
    advantages,
    description,
    shortcomings,
    rate,
    userId,
    deviceId,
    email,
  }) {
    const candidate = await Impression.findOne({ where: { userId, deviceId } })
    if (candidate) throw ApiError.err('Ви вже поставили оцінку')

    const newImpresion = await Impression.create({
      userId,
      deviceId,
      rate,
      advantages,
      description,
      shortcomings,
    })

    const device = await Device.findOne({ where: { id: deviceId } })

    let rating = 0

    if (device.rating === 0) {
      rating = rate
    } else {
      rating = (device.rating + rate) / 2
    }
    rating = Math.ceil(rating)

    await Device.update({ rating }, { where: { id: deviceId } })

    const impression = new ImpressionDto(newImpresion, email)

    return { rating, impression }
  }
}

module.exports = new ImpressionService()
