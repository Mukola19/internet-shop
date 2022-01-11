const FileService = require("../service/file-service")
const DeviceService = require("../service/device-service")

class DeviceControler {
  async create(req, res, next) {



    try {
      let { name, price, typeId, brandId, info } = req.body
      const { img } = req.files
    //   info = JSON.parse(info)

      const nameImg = await FileService.add(img)
      const device = await DeviceService.create({
        name,
        price,
        typeId,
        brandId,
        info,
        img: nameImg,
      })


      return res.json(device)
    
    } catch (e) {
      next(e)
    }
  }



  async getDevice(req, res,next) {
    try {
      const { limit, page, typeId, brandId } = req.query
      const devices = await DeviceService.getDevices(limit, page, typeId, brandId )
      res.json(devices)
    } catch (e) {
      next(e)
    }
  }

  async getOneDevice(req, res) {
    try {
        const device = await DeviceService.getOneDevice(req.params.id)
        res.json(device)

    } catch (e) {
      next(e)
    }
  }
}

module.exports = new DeviceControler()
