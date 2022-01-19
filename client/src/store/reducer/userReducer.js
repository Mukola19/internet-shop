import { createSlice } from "@reduxjs/toolkit"
import { getDevices } from "./devicesReducer"
import { userHttp } from "../../http/userHttp"

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

export const registration = (form, navigate) => async dispath => {
  try {
    dispath(changeLoader(true))
    const user = await userHttp.registration(form)
    dispath(initUser(user))
    dispath(getDevices())
    dispath(changeLoader(false))
    navigate("/shop")
  } catch (e) {
    let error = e.response.data.message
    dispath(changeIsError(error ? error :'Ops'))
  }

}

export const login = (form, navigate) => async dispath => {
  try {
    dispath(changeLoader(true))
    const user = await userHttp.login(form)
    dispath(initUser(user))
    dispath(getDevices())
    navigate("/shop")
    dispath(changeLoader(false))
  } catch (e) {
    let error = e.response.data.message
    dispath(changeIsError(error ? error :'Ops'))
  }
 

}

export const logout = (navigate) => async dispath => {
  dispath(changeLoader(true))
  const data = await userHttp.logout()
  dispath(initUser())
  dispath(getDevices())
  dispath(changeLoader(false))
  navigate("/auth")
}

export const authMe = () => async dispath => {
  dispath(changeLoader(true))
  const data = await userHttp.authMe()
  dispath(initUser(data))
  dispath(changeLoader(false))
}
