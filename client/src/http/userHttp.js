import { $host, $authHost } from './index'

export const userHttp = {
  async registration(form) {
    const res = await $host.post('/user/registration', form)
    localStorage.setItem('token', res.data.accessToken)
    return res.data.user

  },

  async login(form) {
    const res = await $host.post('/user/login', form)
    localStorage.setItem('token', res.data.accessToken)
    return res.data.user
  },



  async authMe() {
    try {
      const res = await $authHost.get('/user/refresh')
      localStorage.setItem('token', res.data.accessToken)
      return res.data.user
    } catch (e) {
      console.error(e)
    }
  }, 


  async logout() {
    try {
      const res = await $authHost.post('/user/logout')
      localStorage.removeItem('token')
      return res.data
    } catch (e) {
      console.error(e)
    }
  },
}
