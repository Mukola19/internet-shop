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


}
