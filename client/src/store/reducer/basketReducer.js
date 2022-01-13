import { createSlice } from "@reduxjs/toolkit"
import { BasketApi } from "../../http/basketApi"
import { devicesApi } from "../../http/devicesApi"

const initialState = {
  array: [],
  count: 0,
 
}

const basketReleases = createSlice({
  name: "basketReleases",
  initialState,
  reducers: {
    setDevices: (state, { payload }) => {
      state.array = payload.rows
      state.count = payload.count
    },
    setDevice: (state, { payload }) => {
        state.array.push(payload)
        state.count++
      },
 
  },
})

const { actions, reducer } = basketReleases

export const { setDevices, setDevice,setOne } = actions

export default reducer

export const addDeviceInBasket = deviceId => async dispath => {
  const data = await BasketApi.addDeviceInBasket(deviceId)
  dispath(setDevice(data))
}


