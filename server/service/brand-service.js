const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandService {
    async create (name) {
        const brand = await Brand.create({ name })
        return brand 
    }
    async getBrands() {
        const brands = await Brand.findAll()
        return brands
    }


}

module.exports = new BrandService()
