const { Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeService {
    async create (name) {
        const type = await Type.create({ name })
        return type 
    }
    async getTypes () {
        const types = await Type.findAll()
        return types
    }


}

module.exports = new TypeService()
