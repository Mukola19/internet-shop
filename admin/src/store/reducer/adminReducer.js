import { createSlice } from '@reduxjs/toolkit'
import { getDevices } from './devicesReducer'
import { AdminApi } from '../../http/adminApi'
import { getTypesBrands } from './typesBrandsReducer'

const initialState = {
  id: null,
  email: null,
  admin: false,
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



export const login = (form, navigate) => async (dispatch) => {
  try {
    const user = await AdminApi.login(form)
    dispatch(initUser(user))
    dispatch(getDevices())
    dispatch(getTypesBrands())
    navigate('/catalog')
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : 'Ops'))
  }
}

export const logout = () => async dispatch => {
  try {
    const data = await AdminApi.logout()
    dispatch(initUser())
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const authMe = () => async (dispatch) => {
  try {
    const data = await AdminApi.authMe()
    dispatch(initUser(data))
    dispatch(getDevices())
    dispatch(getTypesBrands())
  } catch (e) {
    alert(e.response.data.message)
  }
}
