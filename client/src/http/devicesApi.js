import { $host, $authHost } from "./index"



export const devicesApi = {


  async getDevices(page, limit, brandId, typeId) {
    const res = await $host.get("/device", {
      params: {
        limit,
        page,
        brandId,
        typeId,
      },
    })
    return res.data
  },
}
