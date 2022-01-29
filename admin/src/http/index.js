import axios from "axios"

const $host = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + "api",
})

const $authHost = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + "api",
})

$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

$authHost.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const res = await axios.get(`${ process.env.REACT_APP_API_URL}api/user/refresh`, { withCredentials: true })
        localStorage.setItem("token", res.data.accessToken)
        return $authHost.request(originalRequest)
      } catch (e) {
        // return $authHost.request({ message: 'Не авторизований'})
        return { message: "Не авторизований" }
      }
    }
    throw error
  }
)

export { $authHost, $host }
