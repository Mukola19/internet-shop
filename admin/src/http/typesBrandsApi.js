import { $host, $authHost } from './index'


export class TypesBrandsApi {
  static async getTypesBrands() {
    const resType = await $host.get('/type')
    const resBrand = await $host.get('/brand')

    await Promise.all([resType, resBrand])
    return {
      types: resType.data,
      brands: resBrand.data,
    }
  }

  static async createType(form) {
    const res = await $authHost.post('/type', form)
    return res.data
  }
  static async createBrand(form) {
    const res = await $authHost.post('/brand', form)
    return res.data
  }
}
