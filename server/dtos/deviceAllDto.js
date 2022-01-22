module.exports = class DeviceAllDto {
    id
    name
    price
    brandId
    typeId
    img
    rating
    basketDevice
    basketCount
    infos
  
    constructor(model, basketId) {
      this.id = model.id
      this.name = model.name
      this.price = model.price
      this.brandId = model.brandId
      this.typeId = model.typeId
      this.img = model.img
      this.rating = model.rating
      if(model.info) {
        this.infos = model.info.map(i => {
          return {
            id: i.id,
            title: i.title,
            description: i.description,
          }
        })
      } else {
        this.infos = []
      }

      if(model.basket[0] && basketId) {
        if(basketId === model.basket[0].basketId) {
          this.basketDevice = model.basket[0].deviceId === model.id
          this.basketCount = model.basket[0].count
        }
      } else {
        this.basketDevice = false
        this.basketCount = 0
      }
   
    }
  }
  