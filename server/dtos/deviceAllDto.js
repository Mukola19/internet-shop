module.exports = class DeviceAllDto {
  id
  name
  price
  brandId
  typeId
  img
  basketDevice
  basketCount
  rating

  constructor(model, basketId) {
    this.id = model.id
    this.name = model.name
    this.price = model.price
    this.brandId = model.brandId
    this.typeId = model.typeId
    this.img = model.img
    this.rating = model.rating

    if (model.basket[0] && basketId) {
      if (basketId === model.basket[0].basketId) {
        this.basketDevice = model.basket[0].deviceId === model.id
        this.basketCount = model.basket[0].count
      }
    } else {
      this.basketDevice = false
      this.basketCount = 0
    }
  }
}
