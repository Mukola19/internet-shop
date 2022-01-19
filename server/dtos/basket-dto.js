module.exports = class BasketDto {
    id
    count
    name
    img
    price
    deviceId
    rating

    constructor(model) {
      this.id = model.id
      this.count = model.count
      this.name = model.device.name  
      this.img = model.device.img   
      this.price = model.device.price   
      this.deviceId = model.device.id   
      this.rating = model.device.rating  
    }
  }
  