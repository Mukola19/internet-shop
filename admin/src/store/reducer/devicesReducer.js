import { createSlice } from "@reduxjs/toolkit"
import { DevicesApi } from "../../http/devicesApi"
import { changeLoader } from "./adminReducer"


const initialState = {
  array: [],
  count: 10,
  page: 1,
  limit: 10,
  device: {}
}

const devicesReleases = createSlice({
  name: "devicesReleases",
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
    searchDevice: (state, { payload }) => {
      state.array.push(payload)
      state.count++
    },
    setOne: (state, { payload }) => {
      state.device = payload
    },
  },
})

const { actions, reducer } = devicesReleases

export const { setDevices, setDevice,setOne } = actions

export default reducer

export const getDevices = (typeId, brandId, page ) => async (dispath, getState) => {
  dispath(changeLoader(true))
  const { limit } = getState().devices
  const data = await DevicesApi.getDevices(page, limit, brandId, typeId)
  dispath(setDevices(data))
  dispath(changeLoader(false))
}


export const createDevice = (form, onHide) => async dispath => {
  const data = await DevicesApi.createDevice(form)
  onHide(false)
  dispath(setDevice(data))
}

export const getOneDevice = id => async dispath => {
  dispath(changeLoader(true))
  const device = await DevicesApi.getOneDevice(id)
  dispath(setOne(device))
  dispath(changeLoader(false))

}

