import { $host, $authHost } from './index'


export class DevicesApi {
  static async getDevices(page = 1, limit = 5, brandId, typeId) {
    const res = await $authHost.get('/device', {
      params: {
        limit,
        page,
        brandId,
        typeId,
      },
    })
    return res.data
  }


  static async getOneDevice(id) {
    const res = await $authHost.get(`/device/${id}`)
    return res.data
  }
}
