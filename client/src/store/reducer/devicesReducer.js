import { createSlice } from '@reduxjs/toolkit'
import { DevicesApi } from '../../http/devicesApi'
import { changeLoader, changeIsError } from './userReducer'

const initialState = {
  array: [],
  count: 0,
  page: 1,
  limit: 5,
  device: {},
}

const devicesReleases = createSlice({
  name: 'devicesReleases',
  initialState,
  reducers: {
    setDevices: (state, { payload }) => {
      state.array = payload.rows
      state.count = payload.count
    },
    searchDevice: (state, { payload }) => {
      state.array.push(payload)
      state.count++
    },
    setOne: (state, { payload }) => {
      state.device = payload
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    setImpression: (state, { payload }) => {
      state.device.impression.push(payload.impression)
      state.device.rating = payload.rating
    },
  },
})

const { actions, reducer } = devicesReleases

export const { setDevices, setDevice, setOne, changePage, setImpression } =
  actions

export default reducer

export const getDevices =
  (typeId, brandId, page) => async (dispatch, getState) => {
    try {
      dispatch(changeLoader(true))
      const { limit } = getState().devices
      const data = await DevicesApi.getDevices(page, limit, brandId, typeId)
      dispatch(changePage(page))
      dispatch(setDevices(data))
      dispatch(changeLoader(false))
    } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : ''))
    }
  }

export const getOneDevice = (id) => async dispatch => {
  try {
    dispatch(changeLoader(true))
    const device = await DevicesApi.getOneDevice(id)
    dispatch(setOne(device))
    dispatch(changeLoader(false))
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : ''))
  }
}


export const addImpression = (form, onHide) => async dispatch => {
  try {
    dispatch(changeLoader(true))
    const data = await DevicesApi.addImpression(form)
    dispatch(setImpression(data))
    dispatch(changeLoader(false))
    onHide(false)
  } catch (e) {
    let error = e.response.data.message
    dispatch(changeIsError(error ? error : ''))
    dispatch(changeLoader(false))
    onHide(false)

  }
}
