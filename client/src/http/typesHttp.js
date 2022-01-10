import { $host, $authHost } from './index'

export const typesHttp = {
  async getTypes() {
  const res = await $host.get('/type')
  return res.data
  }
}
