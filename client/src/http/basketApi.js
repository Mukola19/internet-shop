import { $host, $authHost } from "./index";

export class BasketApi {
  static async addDeviceInBasket(deviceId) {
    const res = await $authHost.post('/basket', { deviceId })
    return res.data
  }

  static async getBasket() {
    const res = await $authHost.get('/basket')
    return res.data
  }

  static async changeCounter(data) {
    const res = await $authHost.put('/basket/counter',data)
    return res.data
  }


  static async deleteFromBasket(deviceId) {
    const res = await $authHost.delete('/basket/' + deviceId)
    return res.data
  }

  
}
