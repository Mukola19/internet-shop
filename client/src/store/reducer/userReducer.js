import { createSlice } from "@reduxjs/toolkit"
import { getDevices } from "./devicesReducer"
import { userHttp } from "../../http/userHttp"
import { getTypesBrands } from "./typesBrandsReducer"

const initialState = {
  id: null,
  email: null,
  admin: false,
  client: false,
  isActivated: false,
  isAith: false,
  adminMode: false,
  isLoading: false,
  isError: ''
}

const userReleases = createSlice({
  name: "userReleases",
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
      } else {
        state.id = null
        state.email = null
        state.admin = false
        state.client = false
        state.isActivated = false
        state.isAuth = false
      }
    },
    changeLoader:(state, { payload } ) => {
        state.isLoading = payload
    },
    changeIsError:(state, { payload } ) => {
      state.isError = payload
  }
  },
})

const { actions, reducer } = userReleases

export const { initUser , changeLoader, changeIsError} = actions

export default reducer

export const registration = (form, navigate) => async dispatch => {
  try {
    dispatch(changeLoader(true))
    const user = await userHttp.registration(form)
    dispatch(initUser(user))
    dispatch(getDevices())
    dispatch(changeLoader(false))
    navigate("/shop")
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error :'Ops'))
  }

}

export const login = (form, navigate) => async dispatch => {
  try {
    dispatch(changeLoader(true))
    const user = await userHttp.login(form)
    dispatch(initUser(user))
    dispatch(getDevices())
    navigate("/shop")
    dispatch(changeLoader(false))
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error :'Ops'))
  }
 

}

export const logout = (navigate) => async dispatch => {
  dispatch(changeLoader(true))
  const data = await userHttp.logout()
  dispatch(initUser())
  dispatch(getDevices())
  dispatch(changeLoader(false))
  navigate("/auth")
}

export const authMe = () => async dispatch => {
  dispatch(changeLoader(true))
  const data = await userHttp.authMe()
  dispatch(initUser(data))
  dispatch(getTypesBrands())
  dispatch(getDevices())
  dispatch(changeLoader(false))

}
