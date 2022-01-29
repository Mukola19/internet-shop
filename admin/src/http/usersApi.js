import { $host, $authHost } from './index'

export class UserApi {
  static async registration(form) {
    const res = await $host.post('/user/registration', form)
    localStorage.setItem('token', res.data.accessToken)
    return res.data.user
  }

  static async login(form) {
    const res = await $host.post('/user/login', form)
    localStorage.setItem('token', res.data.accessToken)
    return res.data.user
  }

  static async authMe() {
    const res = await $authHost.get('/user/refresh')
    localStorage.setItem('token', res.data.accessToken)
    return res.data.user
  }

  static async logout() {
    try {
      const res = await $authHost.post('/user/logout')
      localStorage.removeItem('token')
      return res.data
    } catch (e) {
      console.error(e)
    }
  }
}
