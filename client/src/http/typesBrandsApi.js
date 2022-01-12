import { $host, $authHost } from "./index"

export const typesBrandsApi = {
  async getTypesBrands() {
    const resType = await $host.get("/type")
    const resBrand = await $host.get("/brand")

    await Promise.all([resType, resBrand])
    return {
      types: resType.data,
      brands: resBrand.data,
    }
  },

  async createType(form) {
    const res = await $authHost.post("/type", form)
    return res.data
  },
  async createBrand(form) {
    const res = await $authHost.post("/brand", form)
    return res.data
  },
}
