import { createSlice } from '@reduxjs/toolkit'
import { BasketApi } from '../../http/basketApi'
import { getDevices, getOneDevice } from './devicesReducer'
import { changeLoader } from './userReducer'

const initialState = {
  array: [],
  allCount: 0,
}
const basketReleases = createSlice({
  name: 'basketReleases',
  initialState,
  reducers: {
    setDevices: (state, { payload }) => {
      state.array = payload
      state.allCount = payload.length
    },
    setDevice: (state, { payload }) => {
      state.array.push(payload)
      state.allCount++
    },
    setCount: (state, { payload }) => {
      state.array.forEach(d => {
        if (d.deviceId === payload.deviceId) {
          d.count = payload.count
        }
      })
    },

    deleteDevice: (state, { payload }) => {
    const newArray = state.array.filter(d => d.deviceId !== payload)
    state.array = newArray



    }
    
  },
})

const { actions, reducer } = basketReleases

export const { setDevices, setDevice, setCount,deleteDevice } = actions

export default reducer





export const addDeviceInBasket = deviceId => async dispath => {
  const data = await BasketApi.addDeviceInBasket(deviceId)
  dispath(setDevice(data))
  dispath(getDevices())
  dispath(getOneDevice(deviceId))

}

export const getBasket = () => async dispath => {
  dispath(changeLoader(true))
  const data = await BasketApi.getBasket()
  dispath(setDevices(data))
  dispath(changeLoader(false)) 
}

export const changeCounter =
  (deviceId, mark, setDisabled) => async dispath => {
    try {
      setDisabled(true)
      const data = await BasketApi.changeCounter(deviceId, mark)
      dispath(setCount(data))
      setDisabled(false)
    } catch (e) {
      setDisabled(false)
    }
   
  }

  export const deleteFromBasket = deviceId => async dispath => {
    await BasketApi.deleteFromBasket(deviceId)
    dispath(deleteDevice(deviceId))
    dispath(getDevices())
    dispath(getOneDevice(deviceId))
  }

