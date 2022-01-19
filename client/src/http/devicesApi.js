import { $host, $authHost } from './index'

export const devicesApi = {
  async getDevices(page, limit, brandId, typeId) {
    const res = await $authHost.get('/device', {
      params: {
        limit,
        page,
        brandId,
        typeId,
      },
    })
    return res.data
  },

  async createDevice({ name, price, typeId, brandId, info, img }) {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('typeId', typeId)
    formData.append('brandId', brandId)
    formData.append('info', JSON.stringify(info))
    formData.append('img', img[0])

  const res = await  $authHost.post('/device', formData)
    return res.data
  },


  async getOneDevice(id) {
    const res = await $authHost.get(`/device/${id}`)
    return res.data
  },
}



