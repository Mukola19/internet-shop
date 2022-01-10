import axios from 'axios'


const $host = axios.create({
    withCredentials:true,
    baseURL: process.env.REACT_APP_API_URL + '/api'
})



const $authHost = axios.create({
    withCredentials: true, 
    baseURL: process.env.REACT_APP_API_URL + '/api'
})


$authHost.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})



export {
    $authHost,
    $host
}