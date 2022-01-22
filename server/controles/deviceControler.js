const FileService = require("../service/file-service")
const DeviceService = require("../service/device-service")

class DeviceControler {
  async create(req, res, next) {
    try {
      let { name, price, typeId, brandId, infos } = req.body
      const { img }  = req.files
      infos = JSON.parse(infos)
      const nameImg = await FileService.add(img)
    
      const device = await DeviceService.create({
        name,
        price,
        typeId,
        brandId,
        infos,
        img: nameImg,
      })

      return res.json(device)
    } catch (e) {
      // next(e)
      console.log(e);
    }
  }



  async getDevice(req, res,next) {
    try {
      const { limit, page, typeId, brandId } = req.query
      const devices = await DeviceService.getDevices(req.user.id, limit, page, typeId, brandId )
      res.json(devices)
    } catch (e) {
      next(e)
    }
  }

  async getOneDevice(req, res, next) {
    try {
        const device = await DeviceService.getOneDevice(req.user.id, req.params.id)
        res.json(device)

    } catch (e) {
      // next(e)
      console.log(e);
    }
  }
}

module.exports = new DeviceControler()
