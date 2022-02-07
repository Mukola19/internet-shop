const DeviceOneDto = require('../dtos/deviceOneDto')
const DeviceAllDto = require('../dtos/deviceAllDto')
const {
  Device,
  DeviceInfo,
  BasketDevice,
  Rating,
  User,
  Impression,
} = require('../models/models')

class DeviceService {
  async create(data) {
    if (!data) {
      throw ApiError.err(400, 'Форма не пройшла валідацію')
    }
    let { name, price, typeId, brandId, infos, img } = data
    price = +price
    typeId = +typeId
    brandId = +brandId

    const device = await Device.create({ name, price, typeId, brandId, img })

    if (infos) {
      infos.forEach(({ title, description }) => {
        DeviceInfo.create({ title, description, deviceId: device.id })
      })
    }

    return device
  }

  async getDevices(basketId, limit, page, typeId, brandId) {
    limit = +limit || 5
    page = +page || 1

    let offset = page * limit - limit

    let devices
    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({
        limit,
        offset,
        include: [{ model: BasketDevice, as: 'basket' }],
      })
    }

    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
        include: [{ model: BasketDevice, as: 'basket' }],
      })
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
        include: [{ model: BasketDevice, as: 'basket' }],
      })
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
        include: [{ model: BasketDevice, as: 'basket' }],
      })
    }

    const rows = devices.rows.map((decice) => {
      return new DeviceAllDto(decice, basketId)
    })

    return { rows, count: devices.count }
  }

  async getOneDevice(basketId, id) {
    const device = await Device.findOne({
      where: { id },
      include: [
        { model: DeviceInfo, as: 'info' },
        { model: BasketDevice, as: 'basket' },
        { model: Impression, as: 'impression' },
      ],
    })
    for await (let obj of device.impression) {
      const user = await User.findOne({ where: { id: obj.userId } })
      obj.email = user.email
    }

    return new DeviceOneDto(device, basketId)
  }
}

module.exports = new DeviceService()
