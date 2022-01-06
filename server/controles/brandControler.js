const ApiError = require("../error/ApiError")
const BrandService = require("../service/brand-service")

class BrandControler {
  async create(req, res, next) {
    try {
      const { name } = req.body
      const brand = await BrandService.create(name)
      res.json(brand)
    } catch (e) {
        next(e)
    }
  }

  async getBrands(req, res) {
    try {
        const brands = await BrandService.getBrands()
        res.json(brands)
      } catch (e) {
          next(e)
      }
  }
}

module.exports = new BrandControler()
