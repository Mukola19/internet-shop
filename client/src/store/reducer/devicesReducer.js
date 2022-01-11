import { createSlice } from "@reduxjs/toolkit"
import { devicesApi } from "../../http/devicesApi"

const initialState = {
  array: [],
  count: 10,
  page: 1,
  limit: 5
}

const devicesReleases = createSlice({
  name: "devicesReleases",
  initialState,
  reducers: {
    setDevices: (state, { payload }) => {
      state.array = payload.rows
      state.count = payload.count
    },
  },
})

const { actions, reducer } = devicesReleases

export const { setDevices } = actions

export default reducer

export const getDevices = ( brandId, typeId) => async (dispath, getState) => {
  const {page, limit} = getState().devices
  const data = await devicesApi.getDevices(page, limit, brandId, typeId)
  dispath(setDevices(data))
}
