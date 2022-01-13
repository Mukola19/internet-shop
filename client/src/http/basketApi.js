import { $host, $authHost } from "./index";

export class BasketApi {
  static async addDeviceInBasket(form) {
    const res = await $authHost.post('/basket', form)
    return res.data
  }
}
