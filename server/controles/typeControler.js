const ApiError = require("../error/ApiError")
const TypeService = require("../service/type-service")

class TypeControler {
  async create(req, res, next) {
    try {
      const { name } = req.body
      const type = await TypeService.create(name)
      res.json(type)
    } catch (e) {
        next(e)
    }
  }

  async getTypes(req, res) {
    try {
        const types = await TypeService.getTypes()
        res.json(types)
      } catch (e) {
          next(e)
      }
  }
}

module.exports = new TypeControler()
