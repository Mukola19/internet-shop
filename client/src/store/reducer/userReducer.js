import { createSlice } from '@reduxjs/toolkit'
import { getDevices } from './devicesReducer'
import { UserApi } from '../../http/userApi'
import { getTypesBrands } from './typesBrandsReducer'

const initialState = {
  id: null,
  email: null,
  admin: false,
  client: false,
  isActivated: false,
  isAuth: false,
  adminMode: false,
  isLoading: false,
  isError: '',
  initialize: false
}

const userReleases = createSlice({
  name: 'userReleases',
  initialState,
  reducers: {
    initUser: (state, { payload }) => {
      if (payload) {
        state.id = payload.id
        state.email = payload.email
        state.admin = payload.admin
        state.client = payload.client
        state.isActivated = payload.isActivated
        state.isAuth = true
        state.initialize = true
      } else {
        state.id = null
        state.email = null
        state.admin = false
        state.client = false
        state.isActivated = false
        state.isAuth = false
        state.initialize = true
      }
    },
    changeLoader: (state, { payload }) => {
      state.isLoading = payload
    },
    changeIsError: (state, { payload }) => {
      state.isError = payload
    },
  },
})

const { actions, reducer } = userReleases

export const { initUser, changeLoader, changeIsError } = actions

export default reducer

export const registration = (form, navigate) => async (dispatch) => {
  try {
    dispatch(changeLoader(true))
    const user = await UserApi.registration(form)
    dispatch(initUser(user))
    dispatch(getDevices())
    navigate('/shop')
    dispatch(changeLoader(false))

  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : ''))
  }
}

export const login = (form, navigate) => async (dispatch) => {
  try {
    dispatch(changeLoader(true))
    const user = await UserApi.login(form)
    dispatch(initUser(user))
    dispatch(getDevices())
    navigate('/shop')
    dispatch(changeLoader(false))
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : ''))
  }
}

export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch(changeLoader(true))
    const data = await UserApi.logout()
    dispatch(initUser())
    dispatch(getDevices())
    dispatch(changeLoader(false))
    navigate('/auth')
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const authMe = () => async (dispatch) => {
  try {
    dispatch(changeLoader(true))
    const data = await UserApi.authMe()
    dispatch(initUser(data))
    dispatch(getTypesBrands())
    dispatch(getDevices())
    dispatch(changeLoader(false))
  } catch (e) {
    dispatch(getTypesBrands())
    dispatch(getDevices())
    dispatch(initUser())
    dispatch(changeLoader(false))
  }
}
