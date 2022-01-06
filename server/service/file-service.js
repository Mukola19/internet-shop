const shortid = require('shortid')
const path = require('path')
const fs = require('fs')
const ApiError = require('../error/ApiError')




class FileService {

  async add(img) {
      if (!img) {
          throw ApiError.err(400, 'Форма не пройшла валідацію')
      }
      
    const name = shortid.generate() + '.jpg'
    img.mv(path.join(__dirname, '..', 'static', name))
    return name
  }

  async delete() {
  }

}

module.exports = new FileService()
