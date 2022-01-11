import { createSlice } from "@reduxjs/toolkit"
import { userHttp } from "../../http/userHttp"




const initialState ={
  id: null, 
  email: null, 
  admin:false, 
  client:false,
  isActivated:false,
  isAith:false,
  adminMode:false
}


const userReleases = createSlice({
  name: "userReleases",
  initialState,
  reducers: {
    initUser:(state, { payload }) => {
      if(payload) {
        state.id = payload.id
        state.email = payload.email
        state.admin = payload.admin
        state.client = payload.client
        state.isActivated = payload.isActivated
        state.isAuth = true
      }else {
        state.id = null
        state.email = null
        state.admin = false
        state.client = false
        state.isActivated = false
        state.isAuth = false
      }
     
    },
   
  },
})

const { actions, reducer } = userReleases

export const {initUser} = actions

export default reducer



export const login = (form, navigate) => async dispath => {
    const user = await userHttp.login(form)
    dispath(initUser(user))
    navigate('/shop')
}


export const logout = navigate => async dispath => {
  const data = await userHttp.logout()
  dispath(initUser())
  navigate('/auth')
}

export const authMe = () => async dispath => {
  const data = await userHttp.authMe()
  dispath(initUser(data))
}



