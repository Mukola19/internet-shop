const { Device, DeviceInfo } = require('../models/models')

class DeviceService {
  async create(data) {
    if (!data) {
      throw ApiError.err(400, 'Форма не пройшла валідацію')
    }
    let { name, price, typeId, brandId, info, img } = data

    price = +price
    typeId = +typeId
    brandId = +brandId


    console.log(name, price, typeId, brandId, info, img )

    const device = await Device.create({ name, price, typeId, brandId, img })

    if (info) {
        info.forEach(({ title, description }) => {
            DeviceInfo.create({ title, description, deviceId: device.id })
          })
    }
   

    return device
  }


  async getDevices(limit, page, typeId, brandId ) {

     limit = limit || 5
     page = page || 1

     let offset = page * limit - limit

    let devices
    if (!typeId && !brandId) {
        devices = await Device.findAndCountAll({limit, offset})
    }

    if (typeId && !brandId) {
        devices = await Device.findAndCountAll({ where:{ typeId},limit, offset })
    }
    if (!typeId && brandId) {
        devices = await Device.findAndCountAll({ where:{ brandId },limit, offset })

    }
    if (typeId && brandId) {
        devices = await Device.findAndCountAll({ where:{ brandId, typeId },limit, offset })

    }


    return devices 
  }

  async getOneDevice(id) {
    const device = await Device.findOne({ 
        where: { id },
        include:[{model: DeviceInfo, as: 'info'}]
    
    })
    return device
  }



}

module.exports = new DeviceService()
